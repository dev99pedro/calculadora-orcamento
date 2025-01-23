import styled from 'styled-components';

interface FiltersResultsNumberProps {
  resultsQtd: number;
}

const StyledModuleDescription = styled.div`
  color: #111111;
  font-size: 12px;
`;

function FiltersResultsNumber({ resultsQtd }: FiltersResultsNumberProps): JSX.Element {
  return (
    <StyledModuleDescription>
      {`${resultsQtd} Resultado${resultsQtd < 2 ? '' : 's'}`}
    </StyledModuleDescription>
  );
}

export default FiltersResultsNumber;
