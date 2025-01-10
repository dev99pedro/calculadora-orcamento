import {
  useEffect, Dispatch,
  SetStateAction,
} from 'react';

import { Theme } from '../../enums/EThemes';

interface ThemeHandlerProps {
  canChange: boolean,
  isHovered: boolean,
  canDelete: boolean,
  isSelected: boolean,
  canClick: boolean,
  setIsSelected: Dispatch<SetStateAction<boolean>>;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

function ThemeHandler({
  canChange,
  isHovered,
  canDelete,
  isSelected,
  canClick,
  setIsSelected,
  setTheme,
}: ThemeHandlerProps): null {
  useEffect(() => {
    function setThemeHandler(): void {
      if (!isSelected) {
        setTheme(isHovered ? Theme.ReadyToAdd : Theme.Neutral);
      } else if (!canDelete || !isHovered) {
        setTheme(Theme.Selected);
      }

      if (canDelete) {
        setTheme(Theme.Delete);
      }
    }

    if (canChange) {
      setThemeHandler();
    }
  }, [canChange, isHovered, canDelete, isSelected, canClick, setIsSelected, setTheme]);
  return null;
}

export default ThemeHandler;
