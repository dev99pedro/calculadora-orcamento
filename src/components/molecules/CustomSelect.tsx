import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';
import { ReactComponent as ToggleFilter } from '../../assets/svgs/toggleFilter.svg';
import { ReactComponent as Checked } from '../../assets/svgs/checked.svg';
import { ReactComponent as Unchecked } from '../../assets/svgs/unchecked.svg';
import IModule from '../../interfaces/IModule';
import ISeal from '../../interfaces/ISeal';

const StyledSelect = styled.div`
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

const StyledOptions = styled.div`
  display: flex;
  flex-direction: column;
  color: #888888;
  border-radius: 8px;
  z-index: 99999;
  font-size: 12px;
  background: #EBEBEB;
  padding: 18px 10px;
  gap: 16px;
  margin-top: 5px;
  user-select: none;
`;

const StyledOption = styled.div`
  display: flex;
  gap: 8px;
  user-select: none;
  svg{
    cursor: pointer;
  }
`;

interface CustomSelectProps {
  modulesData: IModule[],
  setFilteredBySelect: Dispatch<SetStateAction<IModule[]>>
  options: string[];
  compareBy: string;
}

function CustomSelect({
  modulesData,
  setFilteredBySelect,
  options,
  compareBy,
} : CustomSelectProps): JSX.Element {
  const [filters, setFilters] = useState<string[]>([]);
  const [filtersCount, setFiltersCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // Controla a abertura do menu

  useEffect(() => {
    if (filtersCount === 0) {
      setFilteredBySelect(modulesData);
    } else if (typeof modulesData[0][compareBy as keyof IModule] === 'object') {
      setFilteredBySelect(modulesData.filter((module) => filters
        .some((filter) => Array.isArray(module[compareBy])
        && (module[compareBy] as ISeal[]).some((seal) => seal.text === filter))));
    } else {
      setFilteredBySelect(modulesData.filter((module) => filters
        .some((filter) => filter === module[compareBy])));
    }
  }, [modulesData, setFilteredBySelect, filters, filtersCount, compareBy]);

  function toggleDropdown(): void {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    setFiltersCount(filters.length);
  }, [filters]);

  function toggleOption(option: string): void {
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
        onClick={() => {
          toggleDropdown();
        }}
        onKeyDown={(e) => e.key === 'Enter' && toggleDropdown()}
        role="button"
        tabIndex={0}
      >
        {filtersCount
          ? filters.join(', ') : 'Complexidade'}
        <ToggleFilter />
      </StyledSelectTitle>
      <StyledOptions className={`${isOpen ? '' : 'select-hide'}`}>
        {options.map((option) => (
          <StyledOption
            key={option}
            onKeyDown={(e) => e.key === 'Enter' && toggleOption(option)}
            role="option"
            tabIndex={0}
            aria-selected={filters.includes(option)}
          >
            {
              filters.some((filter) => filter === option) ? (
                <Checked onClick={() => {
                  toggleOption(option);
                }}
                />
              ) : (
                <Unchecked onClick={() => {
                  toggleOption(option);
                }}
                />
              )
            }
            {option}
          </StyledOption>
        ))}
      </StyledOptions>
    </StyledSelect>
  );
}

export default CustomSelect;
