import styled from 'styled-components';
import { Dispatch, SetStateAction } from 'react';
import FilterOption from './FilterOption';
import CleanFilters from '../atoms/CleanFilters';

const StyledOptions = styled.div`
  display: flex;
  flex-direction: column;
  color: #888888;
  border-radius: 8px;
  z-index: 99999;
  font-size: 12px;
  background: #EBEBEB;
  padding: 18px 0 18px 10px;
  gap: 16px;
  margin-top: 5px;
  user-select: none;
`;

interface FilterOptionsContainerProps {
  options: string[];
  filters: string[];
  isOpen: boolean;
  setFilters: Dispatch<SetStateAction<string[]>>
  cleanFiltersCallback: () => void;
}

function FilterOptionsContainer({
  options,
  filters,
  isOpen,
  setFilters,
  cleanFiltersCallback,
}: FilterOptionsContainerProps): JSX.Element {
  function toggleOption(option: string): void {
    if (!filters.some((filter) => filter === option)) {
      setFilters((prevFilters) => [...prevFilters, option]);
    } else {
      setFilters((prevFilters) => prevFilters.filter((filter) => filter !== option));
    }
  }

  return (
    <StyledOptions className={`${isOpen ? '' : 'hide'}`}>
      {options.map((option) => (
        <FilterOption
          key={option}
          option={option}
          callback={() => {
            toggleOption(option);
          }}
          filters={filters}
        />
      ))}
      <CleanFilters
        callback={
          () => {
            cleanFiltersCallback();
          }
        }
      />
    </StyledOptions>
  );
}

export default FilterOptionsContainer;
