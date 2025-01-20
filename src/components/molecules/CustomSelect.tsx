import { useEffect, useState } from 'react';
import styled from 'styled-components';
import EComplexity from '../../enums/EComplexity';
import { ReactComponent as ToggleFilter } from '../../assets/svgs/toggleFilter.svg';
import { ReactComponent as Checked } from '../../assets/svgs/checked.svg';
import { ReactComponent as Unchecked } from '../../assets/svgs/unchecked.svg';

const StyledSelect = styled.div`
  .select-items {
    color: red;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 8px;
    z-index: 99999;
  }
  .select-hide {
    display: none;
  }
`;

const StyledSelectTitle = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  background-color: #EBEBEB;
  width: 124px;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  color: #666666;
  cursor: pointer;
  border-radius: 8px;
  font-size: 12px;
  svg{
    transform: ${(props) => (props.isOpen ? 'rotate3d(1, 0, 0, 180deg)' : 'none')};
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
      <StyledSelectTitle
        isOpen={isOpen}
        className="select-selected"
        onClick={toggleDropdown}
        onKeyDown={(e) => e.key === 'Enter' && toggleDropdown()}
        role="button"
        tabIndex={0}
      >
        {filtersCount ? `${filtersCount} complexidade${filtersCount > 1 ? 's' : ''}` : 'Complexidade'}
        <ToggleFilter />
      </StyledSelectTitle>
      <div className={`select-items ${isOpen ? '' : 'select-hide'}`}>
        {options.map((option) => (
          <>
            {
              filters.some((filter) => filter === option) ? <Checked /> : <Unchecked />
            }
            <div
              key={option}
              onClick={() => {
                selectOption(option);
              }}
              onKeyDown={(e) => e.key === 'Enter' && selectOption(option)}
              role="option"
              tabIndex={0}
              aria-selected={filters.includes(option)}
            >
              {option}
            </div>
          </>
        ))}
      </div>
    </StyledSelect>
  );
}

export default InputSelect;
