import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ModulesData from '../../sharedData/ModulesData';
import Module from '../organisms/Module';
import SearchModule from '../molecules/SearchModule';
import IModule from '../../interfaces/IModule';
import CustomSelect from '../molecules/CustomSelect';
import EComplexity from '../../enums/EComplexity';
import ESealsNames from '../../enums/ESeals';
import ISeal from '../../interfaces/ISeal';

const StyledCatalog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #F5F5F5;
  width: 800px;
  align-items: center;
`;

function Catalog(): JSX.Element {
  const [filteredModules, setFilteredModules] = useState<IModule[]>(ModulesData);
  const [filteredBySearch, setFilteredBySearch] = useState<IModule[]>(ModulesData);
  const [filteredByComplexity, setFilteredByComplexity] = useState<IModule[]>(ModulesData);
  const [filteredBySeals, setFilteredBySeals] = useState<IModule[]>(ModulesData);

  useEffect(() => {
    let joinedFilters = filteredBySearch
      .filter(({ id }) => filteredByComplexity.some(({ id: IDFiltered }) => IDFiltered === id));

    joinedFilters = joinedFilters.filter(({ id }) => filteredBySeals
      .some(({ id: IDFiltered }) => IDFiltered === id));

    setFilteredModules(joinedFilters);
  }, [filteredBySearch, filteredByComplexity, filteredBySeals]);

  return (
    <StyledCatalog>
      <CustomSelect
        compareBy="complexity"
        options={([
          EComplexity.LOW,
          EComplexity.MEDIUM,
          EComplexity.HIGH,
        ] as string[])}
        modulesData={ModulesData}
        setFilteredBySelect={setFilteredByComplexity}
      />
      <CustomSelect
        compareBy="seals"
        options={([
          ESealsNames.AGILE.text,
          ESealsNames.CONTENT.text,
          ESealsNames.RECOMMENDED.text,
          ESealsNames.SURPRISE.text,
          ESealsNames.VERSATILE.text,
          ESealsNames.WIDELY_USED.text,
        ] as string[])}
        modulesData={ModulesData}
        setFilteredBySelect={setFilteredBySeals}
      />
      <SearchModule modulesData={ModulesData} setFilteredBySearch={setFilteredBySearch} />
      {
        filteredModules.map((module) => <Module module={module} key={module.id} />)
      }
    </StyledCatalog>
  );
}

export default Catalog;
