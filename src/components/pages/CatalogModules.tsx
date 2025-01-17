import styled from 'styled-components';
import { useState } from 'react';
import ModulesData from '../../sharedData/ModulesData';
import Module from '../organisms/Module';
import SearchModule from '../molecules/SearchModule';
import IModule from '../../interfaces/IModule';
import CustomSelect from '../molecules/CustomSelect';

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
  return (
    <StyledCatalog>
      <CustomSelect />
      <SearchModule modulesData={ModulesData} setFilteredModules={setFilteredModules} />
      {
        filteredModules.map((module) => <Module module={module} key={module.id} />)
      }
    </StyledCatalog>
  );
}

export default Catalog;
