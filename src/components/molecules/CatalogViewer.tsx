import styled from 'styled-components';

const StyledCatalogViewer = styled.div<{ isFirstTabSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 48px;
  font-size: ${({ isFirstTabSelected }) => (isFirstTabSelected ? '14px' : '12px')};
  color: #000000;
  font-weight: ${({ isFirstTabSelected }) => (isFirstTabSelected ? '700' : '200')};
  letter-spacing: 1px;
  background-color: ${({ isFirstTabSelected }) => (isFirstTabSelected ? '#F5F5F5' : '#EBEBEB')};
  ${({ isFirstTabSelected }) => !isFirstTabSelected && 'box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);'}
  span {
    font-weight: 200;
  }
  svg{
    padding-top: 1px;
    margin-right: 4px;
  }
`;

interface CatalogViewerProps {
  modulesQtd: number,
  isFirstTabSelected: boolean,
  setIsFirstTabSelected: React.Dispatch<React.SetStateAction<boolean>>
}

function CatalogViewer({
  modulesQtd,
  isFirstTabSelected,
  setIsFirstTabSelected,
}: CatalogViewerProps): JSX.Element {
  return (
    <StyledCatalogViewer
      isFirstTabSelected={isFirstTabSelected}
      onClick={() => setIsFirstTabSelected(!isFirstTabSelected)}
    >
      <>
        Catálogo de Módulos&nbsp;
        <span>
          {`(${modulesQtd})`}
        </span>
      </>
    </StyledCatalogViewer>
  );
}

export default CatalogViewer;
