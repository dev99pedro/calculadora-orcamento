import styled from 'styled-components'
import './App.css';
import Catalog from './views/CatalogModules';

const StyledAplication = styled.div`
  font-family: 'Product Sans', sans-serif;
`;

function App(): JSX.Element {
  return (
    <StyledAplication>
      <Catalog />
    </StyledAplication>
  );
}

export default App;
