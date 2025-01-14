import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import styled from 'styled-components';
import moduleIndicator from '../../enums/EModuleIndicator';
import { ThemeEnum } from '../../enums/EThemes';

function getIndicatorColor(props: {
  selected: boolean,
}): string {
  return props.selected ? '#3C7D7F' : '#F05F5F';
}

const StyledModuleStateIndicator = styled.div<{ opacity: number, selected: boolean }>`
    display: flex;
    opacity: ${(props) => props.opacity};
    color: ${(props) => getIndicatorColor(props)};
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    width: 84px;
    height: 35px;
    border: 1px solid ${(props) => getIndicatorColor(props)};
    position: absolute;
    left: 65px;
    background: #ffffff;
    transition: opacity 0.5s ease-in-out;
    border-radius: 12px;
`;

interface ModuleStateIndicatorProps {
  selected: boolean;
  setWasUserClicked: Dispatch<SetStateAction<boolean>>;
  setCanChange: Dispatch<SetStateAction<boolean>>;
  setCanClick: Dispatch<SetStateAction<boolean>>;
  setCanDelete: Dispatch<SetStateAction<boolean>>;
  theme: ThemeEnum,
  wasUserClicked: boolean,
}

function ModuleStateIndicator({
  selected,
  setWasUserClicked,
  setCanChange,
  setCanClick,
  setCanDelete,
  theme,
  wasUserClicked,
}: ModuleStateIndicatorProps): JSX.Element {
  const [title, setTitle] = useState<string>('');
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    if (!wasUserClicked) return;
    setTitle(theme === ThemeEnum.Selected ? moduleIndicator.added : moduleIndicator.removed);
    setCanChange(false);
    setOpacity(1);
    setTimeout(() => {
      setOpacity(0);
      setCanChange(true);
      setCanClick(!selected);
      if (!selected) {
        setCanDelete(false);
      }
      setWasUserClicked(false);
    }, moduleIndicator.timeToHide);
  }, [theme, selected, setCanChange, setCanClick, setCanDelete, setWasUserClicked]);

  return (
    <StyledModuleStateIndicator selected={theme === ThemeEnum.Selected} opacity={opacity}>
      {title}
    </StyledModuleStateIndicator>
  );
}

export default ModuleStateIndicator;
