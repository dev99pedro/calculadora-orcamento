import styled from 'styled-components';

interface FiltersResultsNumberProps {
  resultsQtd: number;
}

const StyledModuleDescription = styled.div`
  margin-left: auto;
  color: #111111;
  font-size: 12px;
`;

function FiltersResultsNumber({ resultsQtd }: FiltersResultsNumberProps): JSX.Element {
  return (
    <StyledModuleDescription>
      {`${resultsQtd} Resultado${resultsQtd === 1 ? '' : 's'}`}
    </StyledModuleDescription>
  );
}

export default FiltersResultsNumber;
