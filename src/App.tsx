import logo from './logo.svg';
import './App.css';
import Catalog from './views/CatalogModules';

function App(): JSX.Element {
  return (
    <>
      <Catalog />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            <code> src/App.tsx </code>
            and
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
