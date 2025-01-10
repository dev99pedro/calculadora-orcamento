import { Dispatch, SetStateAction } from 'react';
import { Theme } from '../../enums/EThemes';

interface ModuleBorderProps {
  theme: Theme;
  setBorder: Dispatch<SetStateAction<string>>;
}

function ModuleBorder({ theme, setBorder }: ModuleBorderProps): null {
  const getBorder = {
    neutral: '1px solid #D0D0D0',
    readyToAdd: '2px solid #3C7D7F',
    selected: '2px solid #3C7D7F',
    delete: '2px solid #FF4545',
  };

  setBorder(getBorder[theme]);

  return null;
}

export default ModuleBorder;
