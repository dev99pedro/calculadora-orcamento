import styled from 'styled-components';
import './App.css';
import Catalog from './components/pages/CatalogModules';
import BudgetOverview from './components/pages/BudgetOverview';

const StyledApplication = styled.div`
  font-family: 'Product Sans', sans-serif;
`;

function App(): JSX.Element {
  return (
    <StyledApplication>
      <Catalog />
      <BudgetOverview />
    </StyledApplication>
  );
}

export default App;
