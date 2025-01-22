import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ModulesData from '../../sharedData/ModulesData';
import Module from '../organisms/Module';
import SearchModule from '../molecules/SearchModule';
import IModule from '../../interfaces/IModule';
import CustomFilter from '../organisms/CustomFilter';
import EComplexity from '../../enums/EComplexity';
import ESealsNames from '../../enums/ESeals';
import CleanFilters from '../atoms/CleanFilters';

const StyledCatalog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #F5F5F5;
  width: 800px;
  align-items: center;
`;

function Catalog(): JSX.Element {
  const [filteredByAll, setFilteredByAll] = useState<IModule[]>(ModulesData);
  const [filteredBySearch, setFilteredBySearch] = useState<IModule[]>(ModulesData);
  const [filteredByComplexity, setFilteredByComplexity] = useState<IModule[]>(ModulesData);
  const [filteredBySeals, setFilteredBySeals] = useState<IModule[]>(ModulesData);
  const [cleanAllFilters, setCleanAllFilters] = useState<boolean>(true);

  function isFiltered(module: IModule): boolean {
    return filteredByAll.some(({ id }) => module.id === id);
  }

  useEffect(() => {
    let joinFilters = filteredBySearch
      .filter(({ id }) => filteredByComplexity.some(({ id: IDFiltered }) => IDFiltered === id));

    joinFilters = joinFilters.filter(({ id }) => filteredBySeals
      .some(({ id: IDFiltered }) => IDFiltered === id));

    setFilteredByAll(joinFilters);
  }, [filteredBySearch, filteredByComplexity, filteredBySeals]);

  return (
    <StyledCatalog>
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
      <CleanFilters callback={() => {
        setCleanAllFilters(!cleanAllFilters);
      }}
      />
      <SearchModule
        cleanAllFilters={cleanAllFilters}
        modulesData={ModulesData}
        setFilteredBySearch={setFilteredBySearch}
      />
      {
        ModulesData.map((module) => (
          <Module
            visible={isFiltered(module)}
            module={module}
            key={module.id}
          />
        ))
      }
    </StyledCatalog>
  );
}

export default Catalog;
