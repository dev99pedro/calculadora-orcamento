import styled from 'styled-components';
import './App.css';
import Catalog from './components/pages/CatalogModules';
import Resume from './components/pages/Resume';

const StyledApplication = styled.div`
  font-family: 'Product Sans', sans-serif;
`;

function App(): JSX.Element {
  return (
    <StyledApplication>
      <Catalog />
      <Resume />
    </StyledApplication>
  );
}

export default App;
