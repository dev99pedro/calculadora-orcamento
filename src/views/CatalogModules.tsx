import styled from 'styled-components';
import Module from '../components/organisms/Module';
import ModulesData from '../sharedData/ModulesData';

const StyledCatalog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #F5F5F5;
  width: 800px;
  align-items: center;
`;

function Catalog(): JSX.Element {
  return (
    <StyledCatalog>
      {
        ModulesData.map((module) => <Module module={module} key={module.id} />)
      }
    </StyledCatalog>
  );
}

export default Catalog;
