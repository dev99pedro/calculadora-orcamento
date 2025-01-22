import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { ReactComponent as ToggleFilter } from '../../assets/svgs/toggleFilter.svg';
import { ReactComponent as Checked } from '../../assets/svgs/checked.svg';
import { ReactComponent as Unchecked } from '../../assets/svgs/unchecked.svg';
import IModule from '../../interfaces/IModule';
import ISeal from '../../interfaces/ISeal';

const StyledFilter = styled.div`
  .select-hide {
    display: none;
  }
`;

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

const StyledOption = styled.div`
  display: flex;
  gap: 8px;
  user-select: none;
  max-width: 140px;
  align-items: center;
  cursor: pointer;
  svg{
    cursor: pointer;
    min-width: 16px;
  }
`;

const StyledCleanFilters = styled.div`
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 5px;
`;

interface CustomFilterProps {
  modulesData: IModule[],
  setFilteredBySelect: Dispatch<SetStateAction<IModule[]>>
  options: string[];
  compareBy: string;
  name: string;
}

function CustomFilter({
  modulesData,
  setFilteredBySelect,
  options,
  compareBy,
  name,
} : CustomFilterProps): JSX.Element {
  const [filters, setFilters] = useState<string[]>([]);
  const [filtersCount, setFiltersCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const undoneAllFilters = useCallback((): void => {
    setFilteredBySelect(modulesData);
  }, [modulesData, setFilteredBySelect]);

  function uncheckAll(): void {
    setFilters([]);
  }

  const handleClickOutside = (event: MouseEvent): void => {
    if (dropdownRef.current
      && dropdownRef.current.contains
      && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function compareSeals(): void {
      setFilteredBySelect(modulesData.filter((module) => {
        const moduleSeals: ISeal[] | undefined = module[compareBy] as ISeal[] | undefined;
        if (!Array.isArray(moduleSeals)) {
          return filters.includes('Sem selos');
        }
        return (moduleSeals).some((seal) => filters.includes(seal.text));
      }));
    }

    function compareStrings(): void {
      setFilteredBySelect(modulesData.filter((module) => filters
        .some((filter) => filter === module[compareBy])));
    }

    function isCompareByObject(): boolean {
      return typeof modulesData[0][compareBy as keyof IModule] === 'object';
    }

    if (filtersCount === 0) {
      undoneAllFilters();
    } else if (isCompareByObject()) {
      compareSeals();
    } else {
      compareStrings();
    }
  }, [compareBy, filters, filtersCount, modulesData, setFilteredBySelect, undoneAllFilters]);

  function toggleDropdown(): void {
    setIsOpen((prev) => !prev);
  }

  function getSelectedFiltersCount(): string {
    return filtersCount > 0 ? ` ( ${filtersCount} )` : '';
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
    <StyledFilter ref={dropdownRef} className="custom-select">
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
      <StyledOptions className={`${isOpen ? '' : 'select-hide'}`}>
        {options.map((option) => (
          <StyledOption
            key={option}
            onKeyDown={(e) => e.key === 'Enter' && toggleOption(option)}
            role="option"
            tabIndex={0}
            aria-selected={filters.includes(option)}
            onClick={() => {
              toggleOption(option);
            }}
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
        <StyledCleanFilters onClick={() => {
          undoneAllFilters();
          uncheckAll();
        }}
        >
          Limpar filtro
        </StyledCleanFilters>
      </StyledOptions>
    </StyledFilter>
  );
}

export default CustomFilter;
