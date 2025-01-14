import {
  useEffect, Dispatch,
  SetStateAction,
} from 'react';

import { ThemeEnum } from '../../enums/EThemes';

interface ThemeHandlerProps {
  canChange: boolean,
  isHovered: boolean,
  canDelete: boolean,
  isSelected: boolean,
  canClick: boolean,
  setIsSelected: Dispatch<SetStateAction<boolean>>;
  setTheme: Dispatch<SetStateAction<ThemeEnum>>;
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
        setTheme(isHovered ? ThemeEnum.ReadyToAdd : ThemeEnum.Neutral);
      } else if (!canDelete || !isHovered) {
        setTheme(ThemeEnum.Selected);
      }

      if (canDelete) {
        setTheme(ThemeEnum.Delete);
      }
    }

    if (canChange) {
      setThemeHandler();
    }
  }, [canChange, isHovered, canDelete, isSelected, canClick, setIsSelected, setTheme]);
  return null;
}

export default ThemeHandler;
