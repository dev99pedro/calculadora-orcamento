import { ComplexityLevel } from '../enums/EComplexityColorSet';

interface IModule {
  name: string;
  complexity: ComplexityLevel,
  description: string;
  image: string;
  seals?: (({ text: string, color: string } | null)[]) | undefined;
}

export default IModule;
