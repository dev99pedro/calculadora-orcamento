import { useState } from 'react';
import styled from 'styled-components';
import ModulesData from '../../sharedData/ModulesData';
import Module from '../organisms/Module';
import FiltersContainer from '../organisms/FiltersContainer';
import IModule from '../../interfaces/IModule';
import ToggleCatalogContent from '../molecules/ToggleCatalogContent';

const StyledCatalog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #F5F5F5;
  width: 800px;
  align-items: center;
  padding-top: 20px;
`;

function Catalog(): JSX.Element {
  const [filteredByAll, setFilteredByAll] = useState<IModule[]>(ModulesData);
  const [selectedModules, setSelectedModules] = useState<IModule[]>([]);
  const [isFirstTabSelected, setIsFirstTabSelected] = useState<boolean>(true);

  function isModuleVisible(module: IModule): boolean {
    return filteredByAll.some(({ id }) => module.id === id);
  }

  return (
    <>
      <ToggleCatalogContent
        selectedModules={selectedModules}
        modulesQtd={ModulesData.length}
        isFirstTabSelected={isFirstTabSelected}
        setIsFirstTabSelected={setIsFirstTabSelected}
      />
      <StyledCatalog>
        <FiltersContainer resultsQtd={filteredByAll.length} setFilteredByAll={setFilteredByAll} />
        {
          ModulesData.map((module) => (
            <Module
              visible={isModuleVisible(module)}
              module={module}
              key={module.id}
              setSelectedModules={setSelectedModules}
            />
          ))
        }
      </StyledCatalog>
    </>
  );
}

export default Catalog;
