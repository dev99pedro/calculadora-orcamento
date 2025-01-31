import { Dispatch, SetStateAction, useEffect } from 'react';
import { ThemeEnum, ThemeDetails } from '../../enums/EThemes';

interface ModuleBorderProps {
  theme: ThemeEnum;
  setBorder: Dispatch<SetStateAction<string>>;
}

function ModuleBorder({ theme, setBorder }: ModuleBorderProps): null {
  useEffect(() => {
    setBorder(`${ThemeDetails[theme].borderWidth} solid ${ThemeDetails[theme].color}`);
  }, [theme, setBorder]);

  return null;
}

export default ModuleBorder;
