import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import IModule from '../../interfaces/IModule';
import ISeal from '../../interfaces/ISeal';
import FilterHead from '../molecules/FilterHead';
import CleanFilters from '../atoms/CleanFilters';
import FilterOptions from '../molecules/FilterOptions';

const StyledFilter = styled.div`
  .select-hide {
    display: none;
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

interface CustomFilterProps {
  modulesData: IModule[],
  setFilteredBySelect: Dispatch<SetStateAction<IModule[]>>
  options: string[];
  compareBy: string;
  name: string;
  cleanAllFilters: boolean;
}

function CustomFilter({
  modulesData,
  setFilteredBySelect,
  options,
  compareBy,
  name,
  cleanAllFilters,
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

  const compareSeals = useCallback((): void => {
    setFilteredBySelect(modulesData.filter((module) => {
      const moduleSeals: ISeal[] | undefined = module[compareBy] as ISeal[] | undefined;
      if (!Array.isArray(moduleSeals)) {
        return filters.includes('Sem selos');
      }
      return (moduleSeals).some((seal) => filters.includes(seal.text));
    }));
  }, [modulesData, compareBy, filters, setFilteredBySelect]);

  const compareStrings = useCallback((): void => {
    setFilteredBySelect(modulesData.filter((module) => filters
      .some((filter) => filter === module[compareBy])));
  }, [modulesData, compareBy, filters, setFilteredBySelect]);

  const isCompareByObject = useCallback((): boolean => typeof modulesData[0][compareBy as keyof IModule] === 'object', [modulesData, compareBy]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    undoneAllFilters();
    uncheckAll();
    console.log('mudou');
  }, [cleanAllFilters]);

  useEffect(() => {
    if (filtersCount === 0) {
      undoneAllFilters();
    } else if (isCompareByObject()) {
      compareSeals();
    } else {
      compareStrings();
    }
  }, [
    compareBy,
    compareSeals,
    compareStrings,
    filters,
    filtersCount,
    isCompareByObject,
    modulesData,
    setFilteredBySelect,
    undoneAllFilters,
  ]);

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
      <FilterHead
        name={name}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        filtersCount={filtersCount}
      />
      <StyledOptions className={`${isOpen ? '' : 'select-hide'}`}>
        {options.map((option) => (
          <FilterOptions
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
              undoneAllFilters();
              uncheckAll();
            }
          }
        />
      </StyledOptions>
    </StyledFilter>
  );
}

export default CustomFilter;
