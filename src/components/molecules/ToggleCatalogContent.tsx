import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import IModule from '../../interfaces/IModule';
import CatalogViewer from './CatalogViewer';
import SelectedViewer from './SelectedViewer';

const StyledToggleCatalogContent = styled.div`
  display: flex;
  cursor: pointer;
  font-size: 12px;
`;

interface ToggleCatalogContentProps {
  modulesQtd: number,
  selectedModules: IModule[],
  isFirstTabSelected: boolean,
  setIsFirstTabSelected: Dispatch<SetStateAction<boolean>>
}

function ToggleCatalogContent({
  modulesQtd,
  selectedModules,
  isFirstTabSelected,
  setIsFirstTabSelected,
}: ToggleCatalogContentProps): JSX.Element {
  const handleTabClick = (tab: boolean) => {
    setIsFirstTabSelected(tab);
  };
  return (
    <StyledToggleCatalogContent>
      <CatalogViewer
        modulesQtd={modulesQtd}
        isFirstTabSelected={isFirstTabSelected}
        setIsFirstTabSelected={() => handleTabClick(true)}
      />
      <SelectedViewer
        selectedModulesQtd={selectedModules.length}
        isFirstTabSelected={isFirstTabSelected}
        setIsFirstTabSelected={() => handleTabClick(false)}
      />
    </StyledToggleCatalogContent>
  );
}

export default ToggleCatalogContent;
