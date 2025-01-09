import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Complexity from '../molecules/Complexity';
import ModuleTitle from '../atoms/ModuleTitle';
import ModuleDescription from '../atoms/ModuleDescription';
import ModuleImage from '../atoms/ModuleImage';
import IModule from '../../interfaces/IModule';
import ModulesInfos from '../atoms/ModuleInfos';
import Seal from '../molecules/Seal';
import SealContainer from '../atoms/SealContainer';
import AddButton from '../atoms/AddButton';
import DeleteButton from '../atoms/DeleteButton';
import Selected from '../atoms/Selected';
import ModuleButtonContainer from '../atoms/ModuleButtonContainer';
import ModuleStateIndicator from '../atoms/ModuleStateIndicator';

function getBorderWidth(props: {
  isSelected: boolean,
  isHovered: boolean,
}): string {
  if (props.isSelected || props.isHovered) {
    return '2px';
  }
  return '1px';
}

const StyledModule = styled.div<{ isSelected: boolean, isHovered: boolean, borderColor: string }>`
  display: flex;
  width: 720px;
  min-height: 200px;
  border-radius: 10px;
  border: ${(props) => getBorderWidth(props)} solid ${(props) => props.borderColor};
  justify-content: space-around;
  align-items: center;
  padding: 15px 0px 10px 10px;
  cursor: pointer;
`;

function Module({ module }: { module: IModule }): JSX.Element {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [wasUserClicked, setwasUserClicked] = useState<boolean>(false);
  const [canDelete, setCanDelete] = useState<boolean>(false);
  const [button, setButton] = useState<JSX.Element>(
    <AddButton isHovered={isHovered} selected={() => setIsSelected(true)} />,
  );
  const [canChange, setCanChange] = useState<boolean>(true);
  const [canClick, setCanClick] = useState<boolean>(true);
  const [borderColor, setBorderColor] = useState<string>('#D0D0D0');

  useEffect(() => {
    if (!canChange) return;
    if (!isSelected) {
      setButton(<AddButton isHovered={isHovered} selected={() => setIsSelected(true)} />);
      if (isHovered) {
        setBorderColor('#3C7D7F');
      } else {
        setBorderColor('#D0D0D0');
      }
    }
    if ((isSelected && !canDelete) || (isSelected && !isHovered)) {
      setButton(<Selected />);
      setBorderColor('#3C7D7F');
    }
    if ((canDelete)) {
      setButton(<DeleteButton deleted={() => { setIsSelected(false); }} />);
      setBorderColor('#F05F5F');
    }
  }, [canChange, isHovered, canDelete, isSelected, canClick]);

  return (
    <StyledModule
      isSelected={isSelected}
      isHovered={isHovered}
      borderColor={borderColor}
      onMouseLeave={() => {
        setIsHovered(false);
        setCanDelete(false);
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseMove={() => {
        setCanClick(canChange); // tem que esperar poder mudar
        setCanDelete(isSelected && canChange);
      }}
      onClick={() => {
        if (!canClick) return;
        setIsSelected(!isSelected);
        setwasUserClicked(true);
        setCanDelete(isSelected);
        setCanClick(false);
      }}
    >
      <ModuleButtonContainer>
        {button}
      </ModuleButtonContainer>
      <ModuleStateIndicator
        wasUserClicked={wasUserClicked}
        selected={isSelected}
        setCanChange={setCanChange}
        setCanClick={setCanClick}
        setCanDelete={setCanDelete}
      />
      <ModuleImage src={module.image} />
      <ModulesInfos>
        <Complexity name={module.name} level={module.complexity} />
        <ModuleTitle title={module.name} />
        <ModuleDescription description={module.description} />
        <SealContainer>
          {Array.isArray(module.seals) && module.seals.map((seal) => (
            seal ? (
              <Seal
                color={seal.color}
                text={seal.text}
                Icon={seal.Icon}
                fontColor={seal.fontColor}
              />
            ) : null
          ))}
        </SealContainer>
      </ModulesInfos>
    </StyledModule>
  );
}

export default Module;
