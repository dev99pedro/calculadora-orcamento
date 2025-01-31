import styled from 'styled-components';
import { ReactComponent as LookIcon } from '../../assets/svgs/look.svg';

const StyledSelectedViewer = styled.div<{ isFirstTabSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 48px;
  font-size: ${({ isFirstTabSelected }) => (isFirstTabSelected ? '12px' : '14px')};
  color: #000000;
  font-weight: ${({ isFirstTabSelected }) => (isFirstTabSelected ? '200' : '700')};
  background-color: ${({ isFirstTabSelected }) => (isFirstTabSelected ? '#EBEBEB' : '#F5F5F5')};
  letter-spacing: 1px;
  ${({ isFirstTabSelected }) => isFirstTabSelected && 'box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);'}
  span {
    font-weight: 200;
  }
  svg{
    padding-top: 1px;
    margin-right: 4px;
  }
`;

interface CatalogViewerProps {
  selectedModulesQtd: number,
  isFirstTabSelected: boolean,
  setIsFirstTabSelected: React.Dispatch<React.SetStateAction<boolean>>
}

function CatalogViewer({
  selectedModulesQtd,
  isFirstTabSelected,
  setIsFirstTabSelected,
}: CatalogViewerProps): JSX.Element {
  return (
    <StyledSelectedViewer
      isFirstTabSelected={isFirstTabSelected}
      onClick={() => setIsFirstTabSelected(!isFirstTabSelected)}
    >
      <LookIcon />
      Módulos adicionados&nbsp;
      <span>
        {`(${selectedModulesQtd})`}
      </span>
    </StyledSelectedViewer>
  );
}

export default CatalogViewer;
