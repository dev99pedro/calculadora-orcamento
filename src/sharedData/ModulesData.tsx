import IModule from '../interfaces/IModule';
import imageFull from '../assets/images/image_full.jpg';
import imagensLaterais from '../assets/images/imagens_laterais.jpg';

const modules: IModule[] = [
  {
    name: 'Imagem Full',
    complexity: 'low',
    description: 'A imagem tem largura fixa e altura variável. Pode ser usado para banner principais, reengajamento ou faixas.',
    seals: 'recomendado',
    image: imageFull as string,
  },
  {
    name: '2 Imagens Laterais',
    complexity: 'low',
    description: 'Pode ser usado simulando 1 imagem com 2 links ou 2 imagens com 2 links.',
    image: imagensLaterais as string,
  },
];

export default modules;
