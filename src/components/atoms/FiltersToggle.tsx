import {
  Dispatch,
  SetStateAction,
} from 'react';
import styled from 'styled-components';
import { ReactComponent as ToggleFilter } from '../../assets/svgs/toggleFilter.svg';

interface FiltersToggleProps {
  setAreFiltersVisible: Dispatch<SetStateAction<boolean>>,
  areFiltersVisible: boolean;
}

const StyledFiltersToggle = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #707070;
  cursor: pointer;
  svg {
    transform: ${(props) => (props.isOpen ? 'rotate3d(1, 0, 0, 180deg)' : 'none')};
  }
`;

function FiltersToggle({
  areFiltersVisible,
  setAreFiltersVisible,
}: FiltersToggleProps): JSX.Element {
  return (
    <StyledFiltersToggle
      onClick={() => setAreFiltersVisible((prev) => !prev)}
      isOpen={areFiltersVisible}
    >
      <span>Filtrar por</span>
      <ToggleFilter />
    </StyledFiltersToggle>
  );
}

export default FiltersToggle;
