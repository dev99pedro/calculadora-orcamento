import Module from '../components/organisms/Module';
import ModulesData from '../sharedData/ModulesData';

function Catalog(): JSX.Element {
  return (
    <div>
      {
        ModulesData.map((module) => <Module module={module} key={module.name} />)
      }
      <h1>Catalog</h1>
    </div>
  );
}

export default Catalog;
