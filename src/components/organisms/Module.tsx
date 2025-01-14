import { useState } from 'react';
import styled from 'styled-components';
import Complexity from '../molecules/Complexity';
import ModuleTitle from '../atoms/ModuleTitle';
import ModuleDescription from '../atoms/ModuleDescription';
import ModuleImage from '../atoms/ModuleImage';
import IModule from '../../interfaces/IModule';
import ModulesInfos from '../atoms/ModuleInfos';
import Seal from '../molecules/Seal';
import SealContainer from '../atoms/SealContainer';
import ModuleButtonContainer from '../atoms/ModuleButtonContainer';
import ModuleStateIndicator from '../atoms/ModuleStateIndicator';
import ModuleButton from '../molecules/ModuleButton';
import ThemeHandler from '../molecules/ThemeHandler';
import ModuleBorder from '../molecules/ModuleBorder';
import { ThemeEnum } from '../../enums/EThemes';

const StyledModule = styled.div<{ border: string }>`
  display: flex;
  width: 720px;
  min-height: 200px;
  border-radius: 10px;
  border: ${(props) => props.border};
  justify-content: space-around;
  align-items: center;
  padding: 15px 0px 10px 10px;
  cursor: pointer;
`;

function Module({ module }: { module: IModule }): JSX.Element {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [wasUserClicked, setWasUserClicked] = useState<boolean>(false);
  const [canDelete, setCanDelete] = useState<boolean>(false);
  const [canChange, setCanChange] = useState<boolean>(true);
  const [canClick, setCanClick] = useState<boolean>(true);
  const [border, setBorder] = useState<string>('1px solid #D0D0D0');
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.Neutral);

  return (
    <>
      <ThemeHandler
        canChange={canChange}
        isHovered={isHovered}
        canDelete={canDelete}
        isSelected={isSelected}
        canClick={canClick}
        setIsSelected={setIsSelected}
        setTheme={setTheme}
      />
      <StyledModule
        border={border}
        onMouseLeave={() => {
          setIsHovered(false);
          setCanDelete(false);
        }}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseMove={() => {
          setCanClick(canChange);
          setCanDelete(isSelected && canChange);
        }}
        onClick={() => {
          if (!canClick) return;
          setIsSelected(!isSelected);
          setWasUserClicked(true);
          setCanDelete(isSelected);
          setCanClick(false);
        }}
      >
        <ModuleButtonContainer>
          <ModuleBorder setBorder={setBorder} theme={theme} />
          <ModuleButton
            isHovered={isHovered}
            setIsSelected={setIsSelected}
            theme={theme}
          />
        </ModuleButtonContainer>
        <ModuleStateIndicator
          setWasUserClicked={setWasUserClicked}
          theme={theme}
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
    </>
  );
}

export default Module;
