import styled from 'styled-components';

const StyledCleanFilters = styled.div`
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 5px;
  color: #666666;
  font-size: 12px;
`;

interface CleanFiltersProps {
  title: string,
  callback: () => void;
}

function CleanFilters({
  title,
  callback,
}: CleanFiltersProps): JSX.Element {
  return (
    <StyledCleanFilters onClick={() => callback()}>
      {title}
    </StyledCleanFilters>
  );
}

export default CleanFilters;
