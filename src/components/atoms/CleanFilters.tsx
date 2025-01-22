import styled from 'styled-components';

const StyledCleanFilters = styled.div`
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 5px;
`;

interface CleanFiltersProps {
  callback: () => void;
}

function FilterHead({
  callback,
}: CleanFiltersProps): JSX.Element {
  return (
    <StyledCleanFilters onClick={() => callback()}>
      Limpar filtro
    </StyledCleanFilters>
  );
}

export default FilterHead;
