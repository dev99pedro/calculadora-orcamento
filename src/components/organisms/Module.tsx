import { useCallback, useEffect, useState } from 'react';
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
import ThemeHandler from '../handlers/ThemeHandler';
import ModuleBorder from '../molecules/ModuleBorder';
import { ThemeEnum } from '../../enums/EThemes';

const StyledModule = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'visible',
})<{ border: string, visible: boolean }>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  width: 720px;
  min-height: 200px;
  border-radius: 10px;
  border: ${(props) => props.border};
  justify-content: space-around;
  align-items: center;
  padding: 15px 0px 10px 10px;
  cursor: pointer;
`;

interface ModuleProps {
  module: IModule;
  visible: boolean;
  setSelectedModules: React.Dispatch<React.SetStateAction<IModule[]>>;
}

function Module({ module, visible, setSelectedModules }: ModuleProps): JSX.Element {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [wasUserClicked, setWasUserClicked] = useState<boolean>(false);
  const [canDelete, setCanDelete] = useState<boolean>(false);
  const [canChange, setCanChange] = useState<boolean>(true);
  const [canClick, setCanClick] = useState<boolean>(true);
  const [border, setBorder] = useState<string>('1px solid #D0D0D0');
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.Neutral);

  function resetOnLeave(): void {
    if (canChange) {
      setIsHovered(false);
      setCanDelete(false);
    }
  }

  const updateSelectedModules = useCallback(() => {
    if (isSelected) {
      setSelectedModules((prev: IModule[]) => {
        const newModules = [...prev, module];
        return newModules;
      });
    } else {
      setSelectedModules((prev) => prev.filter(({ id }) => id !== module.id));
    }
  }, [isSelected, module, setSelectedModules]);

  useEffect(() => {
    updateSelectedModules();
  }, [updateSelectedModules]);

  function toggleSelectedOrDeleted(): void {
    if (!canClick) return;
    setIsSelected(!isSelected);
    setWasUserClicked(true);
    setCanDelete(isSelected);
    setCanClick(false);
  }

  function toggleStatesAfterChange(): void {
    setCanChange(true);
    if (!isSelected) {
      setCanDelete(false);
      setIsHovered(false);
    }
    setWasUserClicked(false);
  }

  function mouseEnterEvents(): void {
    if (canChange) {
      setIsHovered(true);
      setCanDelete(isSelected);
      setCanClick(true);
    }
  }

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
        visible={visible}
        border={border}
        onMouseLeave={() => {
          resetOnLeave();
        }}
        onMouseEnter={() => {
          mouseEnterEvents();
        }}
        onClick={() => {
          toggleSelectedOrDeleted();
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
          wasUserClicked={wasUserClicked}
          setCanChange={setCanChange}
          theme={theme}
          toggleStatesAfterChange={() => { toggleStatesAfterChange(); }}
        />
        <ModuleImage src={module.image} />
        <ModulesInfos>
          <Complexity level={module.complexity} />
          <ModuleTitle title={module.name} />
          <ModuleDescription description={module.description} />
          <SealContainer>
            {Array.isArray(module.seals) && module.seals.map((seal) => (
              <Seal
                key={`${seal.id}/${module.id}`}
                id={seal.id}
                color={seal.color}
                text={seal.text}
                Icon={seal.Icon}
                fontColor={seal.fontColor}
              />
            ))}
          </SealContainer>
        </ModulesInfos>
      </StyledModule>
    </>
  );
}

export default Module;
