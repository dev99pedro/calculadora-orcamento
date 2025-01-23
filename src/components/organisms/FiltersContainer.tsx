import styled from 'styled-components';
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import ModulesData from '../../sharedData/ModulesData';
import SearchModule from '../molecules/SearchModule';
import IModule from '../../interfaces/IModule';
import CustomFilter from './CustomFilter';
import EComplexity from '../../enums/EComplexity';
import EModuleTypes from '../../enums/EModuleTypes';
import ESealsNames from '../../enums/ESeals';
import CleanFilters from '../atoms/CleanFilters';
import FiltersResultsNumber from '../atoms/FiltersResultsNumber';

const StyledFiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F5F5F5;
  height: 116px;
  width: 730px;
  `;

const StyledFiltersSubContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  gap: 20px;
`;

interface FiltersContainerProps {
  setFilteredByAll: Dispatch<SetStateAction<IModule[]>>,
  resultsQtd: number,
}

function FiltersContainer({ setFilteredByAll, resultsQtd } : FiltersContainerProps): JSX.Element {
  const [filteredBySearch, setFilteredBySearch] = useState<IModule[]>(ModulesData);
  const [filteredByComplexity, setFilteredByComplexity] = useState<IModule[]>(ModulesData);
  const [filteredByType, setFilteredByType] = useState<IModule[]>(ModulesData);
  const [filteredBySeals, setFilteredBySeals] = useState<IModule[]>(ModulesData);
  const [cleanAllFilters, setCleanAllFilters] = useState<boolean>(true);

  useEffect(() => {
    let joinFilters = filteredBySearch
      .filter(({ id }) => filteredByComplexity.some(({ id: IDFiltered }) => IDFiltered === id));

    joinFilters = joinFilters.filter(({ id }) => filteredBySeals
      .some(({ id: IDFiltered }) => IDFiltered === id));

    joinFilters = joinFilters.filter(({ id }) => filteredByType
      .some(({ id: IDFiltered }) => IDFiltered === id));

    setFilteredByAll(joinFilters);
  }, [filteredBySearch, filteredByComplexity, filteredBySeals, filteredByType, setFilteredByAll]);

  return (
    <StyledFiltersContainer>
      <SearchModule
        cleanAllFilters={cleanAllFilters}
        modulesData={ModulesData}
        setFilteredBySearch={setFilteredBySearch}
      />
      <StyledFiltersSubContainer>
        <CustomFilter
          name="Tipo de módulo"
          compareBy="type"
          options={([
            EModuleTypes.OnlyImages,
            EModuleTypes.OnlyTexts,
            EModuleTypes.ShowCase,
            EModuleTypes.TextsAndImages,
          ] as string[])}
          modulesData={ModulesData}
          setFilteredBySelect={setFilteredByType}
          cleanAllFilters={cleanAllFilters}
        />
        <CustomFilter
          name="Complexidade"
          compareBy="complexity"
          options={([
            EComplexity.LOW,
            EComplexity.MEDIUM,
            EComplexity.HIGH,
          ] as string[])}
          modulesData={ModulesData}
          setFilteredBySelect={setFilteredByComplexity}
          cleanAllFilters={cleanAllFilters}
        />
        <CustomFilter
          name="Selos"
          compareBy="seals"
          options={([
            ESealsNames.AGILE.text,
            ESealsNames.CONTENT.text,
            ESealsNames.RECOMMENDED.text,
            ESealsNames.SURPRISE.text,
            ESealsNames.VERSATILE.text,
            ESealsNames.WIDELY_USED.text,
            'Sem selos',
          ] as string[])}
          modulesData={ModulesData}
          setFilteredBySelect={setFilteredBySeals}
          cleanAllFilters={cleanAllFilters}
        />
        <CleanFilters
          title="Limpar Filtros"
          callback={() => {
            setCleanAllFilters(!cleanAllFilters);
          }}
        />
        <FiltersResultsNumber resultsQtd={resultsQtd} />
      </StyledFiltersSubContainer>
    </StyledFiltersContainer>
  );
}

export default FiltersContainer;
