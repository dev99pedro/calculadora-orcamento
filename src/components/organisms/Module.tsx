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

function getBorderColor(props:
{ isSelected: boolean, isHovered: boolean, isAbleToDelete: boolean }): string {
  if (props.isSelected && props.isHovered && props.isAbleToDelete) {
    return '#F05F5F';
  }
  if (props.isSelected || props.isHovered) {
    return '#3C7D7F';
  }
  return '#D0D0D0';
}

function getBorderWidth(props:
{ isSelected: boolean, isHovered: boolean, isAbleToDelete: boolean }): string {
  if (props.isSelected || props.isHovered) {
    return '2px';
  }
  return '1px';
}

const StyledModule = styled.div<{ isSelected: boolean, isHovered: boolean, isAbleToDelete: boolean }>`
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
  const [isAbleToDelete, setIsAbleToDelete] = useState<boolean>(false);

  return (
    <StyledModule
      onMouseLeave={() => {
        setIsHovered(false);
        setIsAbleToDelete(isSelected);
      }}
      onMouseEnter={() => setIsHovered(true)}
      isSelected={isSelected}
      isHovered={isHovered}
      isAbleToDelete={isAbleToDelete}
      onClick={() => {
        if (isAbleToDelete) {
          setIsSelected(false);
        } else {
          setIsSelected(true);
        }
      }}
    >
      {isSelected && isAbleToDelete && isHovered && (
        <DeleteButton
          deleted={() => {
            setIsSelected(false);
          }}
        />
      )}
      {isSelected && (!isAbleToDelete || !isHovered) && <Selected />}
      {!isSelected && <AddButton isHovered={isHovered} selected={() => setIsSelected(true)} />}
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
