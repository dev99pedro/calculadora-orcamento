import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import IModule from '../../interfaces/IModule';

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

const StyledCatalogViewer = styled.div<{ isFirstTabSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 48px;
  font-size: 14px;
  color: #000000;
  font-weight: 700;
  letter-spacing: 1px;
  background-color: ${({ isFirstTabSelected }) => (isFirstTabSelected ? '#F5F5F5' : '#EBEBEB')};
  ${({ isFirstTabSelected }) => !isFirstTabSelected && 'box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);'}
  span {
    font-weight: 200;
  }
`;

const StyledSelectedViewer = styled.div<{ isFirstTabSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 48px;
  font-size: 14px;
  color: #000000;
  font-weight: 700;
  background-color: ${({ isFirstTabSelected }) => (isFirstTabSelected ? '#EBEBEB' : '#F5F5F5')};
  letter-spacing: 1px;
  ${({ isFirstTabSelected }) => isFirstTabSelected && 'box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);'}
  span {
    font-weight: 200;
  }
`;

function ToggleCatalogContent({
  modulesQtd,
  selectedModules,
  isFirstTabSelected,
  setIsFirstTabSelected,
}: ToggleCatalogContentProps): JSX.Element {
  return (
    <StyledToggleCatalogContent>
      <StyledCatalogViewer
        isFirstTabSelected={isFirstTabSelected}
        onClick={() => setIsFirstTabSelected(!isFirstTabSelected)}
      >
        Catálogo de Módulos&nbsp;
        <span>
          {`(${modulesQtd})`}
        </span>
      </StyledCatalogViewer>
      <StyledSelectedViewer
        isFirstTabSelected={isFirstTabSelected}
        onClick={() => setIsFirstTabSelected(!isFirstTabSelected)}
      >
        Módulos adicionados&nbsp;
        <span>
          {`(${selectedModules.length})`}
        </span>
      </StyledSelectedViewer>
    </StyledToggleCatalogContent>
  );
}

export default ToggleCatalogContent;
