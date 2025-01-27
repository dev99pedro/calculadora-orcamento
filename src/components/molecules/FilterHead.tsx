import {
  Dispatch,
  SetStateAction,
} from 'react';
import styled from 'styled-components';
import { ReactComponent as ToggleFilter } from '../../assets/svgs/toggleFilter.svg';

const StyledFilterHead = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  background-color: #EBEBEB;
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  color: #666666;
  cursor: pointer;
  border-radius: 8px;
  font-size: 12px;
  user-select: none;
  svg{
    transform: ${(props) => (props.isOpen ? 'rotate3d(1, 0, 0, 180deg)' : 'none')};
  }
`;

interface FilterHeadProps {
  name: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  filtersCount: number,
}

function FilterHead({
  name,
  isOpen,
  setIsOpen,
  filtersCount,
}: FilterHeadProps): JSX.Element {
  function toggleDropdown(): void {
    setIsOpen((prev) => !prev);
  }

  function getSelectedFiltersCount(): string {
    return filtersCount > 0 ? ` ( ${filtersCount} )` : '';
  }

  return (
    <StyledFilterHead
      isOpen={isOpen}
      className="select-selected"
      onClick={() => {
        toggleDropdown();
      }}
      onKeyDown={(e) => e.key === 'Enter' && toggleDropdown()}
      role="button"
      tabIndex={0}
    >
      {name}
      {getSelectedFiltersCount()}
      <ToggleFilter />
    </StyledFilterHead>
  );
}

export default FilterHead;
