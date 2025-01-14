import { ComplexityLevel } from '../enums/EComplexityColorSet';
import ISeal from './ISeal';

interface IModule {
  id: number;
  name: string;
  complexity: ComplexityLevel,
  description: string;
  image: string;
  seals?: ISeal[];
}

export default IModule;
