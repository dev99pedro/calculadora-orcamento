import { ComplexityLevel } from '../enums/ComplexityColorSet';

interface IModule {
  name: string;
  complexity: ComplexityLevel,
  description: string;
  image: string;
  seals?: string;
}

export default IModule;
