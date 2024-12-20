import { ComplexityLevel } from '../enums/ComplexityColorSet';

const modules: {
  name: string;
  complexity: ComplexityLevel; // Use o tipo restrito
  description: string;
  seals?: string;
}[] = [
  {
    name: 'Imagem Full',
    complexity: 'low',
    description: ' A imagem tem largura fixa e altura variável. Pode ser usado para banner principais, reengajamento ou faixas',
    seals: 'recomendado',
  },
  {
    name: '2 Imagens Laterais',
    complexity: 'low',
    description: 'Pode ser usado simulando 1 imagem com 2 links ou 2 imagens com 2 links',
  },
];

export default modules;
