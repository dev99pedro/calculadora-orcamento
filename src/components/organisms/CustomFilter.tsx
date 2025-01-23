/* eslint-disable react-hooks/exhaustive-deps */
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
import FilterOptionsContainer from '../molecules/FilterOptionsContainer';
import DocumentClickHandler from '../handlers/DocumentClickHandler';

const StyledCustomFilter = styled.div`
  .hide {
    display: none;
  }
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

  const undoneOptionsSelections = useCallback((): void => {
    setFilteredBySelect(modulesData);
  }, [modulesData]);

  function uncheckAll(): void {
    setFilters([]);
  }

  const compareSeals = useCallback((): void => {
    setFilteredBySelect(modulesData.filter((module) => {
      const moduleSeals: ISeal[] | undefined = module[compareBy] as ISeal[] | undefined;
      if (!Array.isArray(moduleSeals)) {
        return filters.includes('Sem selos');
      }
      return (moduleSeals).some((seal) => filters.includes(seal.text));
    }));
  }, [filters]);

  const compareStrings = useCallback((): void => {
    setFilteredBySelect(modulesData.filter((module) => filters
      .some((filter) => filter === module[compareBy])));
  }, [filters]);

  const isCompareByObject = useCallback((): boolean => typeof modulesData[0][compareBy as keyof IModule] === 'object', [modulesData, compareBy]);

  useEffect(() => {
    undoneOptionsSelections();
    uncheckAll();
  }, [cleanAllFilters]);

  useEffect(() => {
    if (filtersCount === 0) {
      undoneOptionsSelections();
    } else if (isCompareByObject()) {
      compareSeals();
    } else {
      compareStrings();
    }
  }, [
    filtersCount,
  ]);

  useEffect(() => {
    setFiltersCount(filters.length);
  }, [filters]);

  return (
    <StyledCustomFilter ref={dropdownRef} className="custom-select">
      <DocumentClickHandler
        elementReference={dropdownRef}
        callback={() => { setIsOpen(false); }}
      />
      <FilterHead
        name={name}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        filtersCount={filtersCount}
      />
      <FilterOptionsContainer
        options={options}
        filters={filters}
        isOpen={isOpen}
        setFilters={setFilters}
        cleanFiltersCallback={() => {
          undoneOptionsSelections();
          uncheckAll();
        }}
      />
    </StyledCustomFilter>
  );
}

export default CustomFilter;
