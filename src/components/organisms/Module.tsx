import Complexity from '../molecules/Complexity';
import { ComplexityLevel } from '../../enums/ComplexityColorSet';

interface ModuleProps {
  module: {
    name: string;
    complexity: ComplexityLevel,
    description: string;
    seals?: string;
  };
}

function Module(Props: ModuleProps): JSX.Element {
  const { module } = Props;
  const { name } = module;
  const { complexity } = module;
  return (
    <div>
      <h1>Module</h1>
      {name}
      <Complexity name={name} level={complexity} />
    </div>
  );
}

export default Module;
