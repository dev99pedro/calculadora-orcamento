import { Dispatch, SetStateAction } from 'react';
import { ThemeEnum, ThemeDetails } from '../../enums/EThemes';

interface ModuleBorderProps {
  theme: ThemeEnum;
  setBorder: Dispatch<SetStateAction<string>>;
}

function ModuleBorder({ theme, setBorder }: ModuleBorderProps): null {
  setBorder(`${ThemeDetails[theme].borderWidth} solid ${ThemeDetails[theme].color}`);

  return null;
}

export default ModuleBorder;
