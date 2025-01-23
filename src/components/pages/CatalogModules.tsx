import { useState } from 'react';
import styled from 'styled-components';
import ModulesData from '../../sharedData/ModulesData';
import Module from '../organisms/Module';
import FiltersContainer from '../organisms/FiltersContainer';
import IModule from '../../interfaces/IModule';

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

  function isModuleVisible(module: IModule): boolean {
    return filteredByAll.some(({ id }) => module.id === id);
  }

  return (
    <StyledCatalog>
      <FiltersContainer resultsQtd={filteredByAll.length} setFilteredByAll={setFilteredByAll} />
      {
        ModulesData.map((module) => (
          <Module
            visible={isModuleVisible(module)}
            module={module}
            key={module.id}
          />
        ))
      }
    </StyledCatalog>
  );
}

export default Catalog;
