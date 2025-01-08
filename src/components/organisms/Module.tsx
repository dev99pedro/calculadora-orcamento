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

function getBorderColor(props: {
  isSelected: boolean,
  isHovered: boolean,
  canDelete: boolean,
}): string {
  if (props.isSelected && props.canDelete && props.isHovered) {
    return '#F05F5F';
  }
  if (props.isSelected || props.isHovered) {
    return '#3C7D7F';
  }
  return '#D0D0D0';
}

function getBorderWidth(props: {
  isSelected: boolean,
  isHovered: boolean,
}): string {
  if (props.isSelected || props.isHovered) {
    return '2px';
  }
  return '1px';
}

const StyledModule = styled.div<{ isSelected: boolean, isHovered: boolean, canDelete: boolean }>`
  display: flex;
  width: 720px;
  min-height: 200px;
  border-radius: 10px;
  border: ${(props) => getBorderWidth(props)} solid ${(props) => getBorderColor(props)};
  justify-content: space-around;
  align-items: center;
  padding: 15px 0px 10px 10px;
  cursor: pointer;
`;

function Module({ module }: { module: IModule }): JSX.Element {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isUserClick, setIsUserClick] = useState<boolean>(false);
  const [canDelete, setCanDelete] = useState<boolean>(false);
  const [button, setButton] = useState<JSX.Element>(
    <AddButton isHovered={isHovered} selected={() => setIsSelected(true)} />,
  );
  const [canChange, setCanChange] = useState<boolean>(true);

  useEffect(() => {
    if (!isSelected) {
      setButton(<AddButton isHovered={isHovered} selected={() => setIsSelected(true)} />);
    }
    if ((isSelected && !canDelete) || (isSelected && !isHovered)) {
      setButton(<Selected />);
    }
    if (isSelected && isHovered && canDelete) {
      setButton(<DeleteButton deleted={() => { setIsSelected(false); }} />);
    }
  }, [canChange, isHovered, canDelete, isSelected]);

  return (
    <StyledModule
      isSelected={isSelected}
      isHovered={isHovered}
      canDelete={canDelete}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onMouseEnter={() => {
        if (canChange) {
          setIsHovered(true);
        }
      }}
      onMouseMove={() => {
        if (canChange) {
          setCanDelete(isSelected);
        }
      }}
      onClick={() => {
        if (canChange) {
          setIsSelected(!isSelected);
          setIsUserClick(true);
          setCanChange(false);
        }
      }}
    >
      <ModuleButtonContainer>
        {button}
      </ModuleButtonContainer>
      <ModuleStateIndicator
        isUserClick={isUserClick}
        selected={isSelected}
        setCanChange={() => setCanChange(true)}
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
