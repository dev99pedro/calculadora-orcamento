import { useEffect, useState } from 'react';
import styled from 'styled-components';
import EComplexity from '../../enums/EComplexity';

const StyledSelect = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  border: 2px solid red;
  height: 50px;
  .select-selected {
    border: 2px solid red;
    position: relative;
    background-color: blue;
    width: 100%;
    height: 5.2vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: yellow;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 8px;
  }
  .select-selected.select-arrow-active {
    width: fit-content;
    padding-right: 30px;
  }
  .select-selected:after {
    position: absolute;
    content: '';
    top: calc(50% - 3px);
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: red transparent transparent transparent;
  }
  .select-items div {
    color: red;
    padding: 8px 16px;
    background-color: purple;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: flex-start;
    border-radius: 8px;
    z-index: 99999;
  }
  .select-items div:hover {
    background-color: rgba(138, 2, 202, 0.4);
  }
  .select-items {
    border: 2px solid orange;
    width: 100%;
    border-radius: 8px;
  }
  .select-hide {
    display: none;
  }
`;

function InputSelect(): JSX.Element {
  const [filters, setFilters] = useState<string[]>([]);
  const [filtersCount, setFiltersCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // Controla a abertura do menu
  const options = [
    EComplexity.LOW,
    EComplexity.MEDIUM,
    EComplexity.HIGH,
  ];

  const toggleDropdown = (): void => setIsOpen((prev) => !prev);

  useEffect(() => {
    setFiltersCount(filters.length);
  }, [filters]);

  function selectOption(option: string): void {
    if (!filters.some((filter) => filter === option)) {
      setFilters([...filters, option]);
    } else {
      setFilters(filters.filter((filter) => filter !== option));
    }
  }

  return (
    <StyledSelect className="custom-select">
      <div
        className="select-selected"
        onClick={toggleDropdown}
        onKeyDown={(e) => e.key === 'Enter' && toggleDropdown()}
        role="button"
        tabIndex={0}
      >
        {filtersCount ? `${filtersCount} complexidades` : 'Complexidade'}
      </div>
      <div className={`select-items ${isOpen ? '' : 'select-hide'}`}>
        {options.map((option) => (
          <button
            key={option}
            onClick={() => selectOption(option)}
            onKeyDown={(e) => e.key === 'Enter' && selectOption(option)}
            role="option"
            tabIndex={0}
            aria-selected={filters.includes(option)}
            type="button"
          >
            {option}
          </button>
        ))}
      </div>
    </StyledSelect>
  );
}

export default InputSelect;
