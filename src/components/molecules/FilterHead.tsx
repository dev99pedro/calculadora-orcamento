import {
  Dispatch,
  SetStateAction,
} from 'react';
import styled from 'styled-components';
import { ReactComponent as ToggleFilter } from '../../assets/svgs/toggleFilter.svg';

const StyledFilterTitle = styled.div<{ isOpen: boolean }>`
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

interface FilterTitleProps {
  name: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  filtersCount: number,
}

function FilterTitle({
  name,
  isOpen,
  setIsOpen,
  filtersCount,
}: FilterTitleProps): JSX.Element {
  function toggleDropdown(): void {
    setIsOpen((prev) => !prev);
  }

  function getSelectedFiltersCount(): string {
    return filtersCount > 0 ? ` ( ${filtersCount} )` : '';
  }

  return (
    <StyledFilterTitle
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
    </StyledFilterTitle>
  );
}

export default FilterTitle;
