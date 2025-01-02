import Module from '../components/organisms/Module';
import ModulesData from '../sharedData/ModulesData';

function Catalog(): JSX.Element {
  return (
    <div>
      {
        ModulesData.map((module) => <Module module={module} key={module.id} />)
      }
    </div>
  );
}

export default Catalog;
