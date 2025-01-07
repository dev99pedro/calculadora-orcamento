import IModule from '../interfaces/IModule';
import imageFull from '../assets/images/image_full.jpg';
import LateralImages from '../assets/images/imagens_laterais.jpg';
import fourSequencialImages from '../assets/images/4_imagens_sequenciais.jpg';
import twoImages from '../assets/images/2_imagens.jpg';
import threeImages from '../assets/images/3_imagens.jpg';
import fourImages from '../assets/images/4_imagens.jpg';
import fiveImages from '../assets/images/5_imagens.jpg';
import mosaico4Images from '../assets/images/mosaico_4_imagens.jpg';
import secondaryTitle from '../assets/images/titulo_secundario.jpg';
import text1ColumnNoBG from '../assets/images/texto_1_coluna_sem_fundo.jpg';
import text1ColumnBG from '../assets/images/texto_1_coluna_fundo.jpg';
import twoTextColumns from '../assets/images/2_colunas_de_texto.jpg';
import textWithTwoColumns from '../assets/images/texto_com_2_colunas.jpg';
import threeTextColumns from '../assets/images/3_colunas_de_texto_e_imagem.jpg';
import textWithThreeColumns from '../assets/images/texto_com_3_colunas.jpg';
import bgImageSimpleText from '../assets/images/imagem_de_fundo_texto_simples.jpg';
import bgImageCompleteText from '../assets/images/imagem_de_fundo_texto_completo.jpg';
import leftTextImage from '../assets/images/texto_e_imagem_a_esquerda.jpg';
import rightTextImage from '../assets/images/texto_e_imagem_a_direita.jpg';
import textTwoImagesLeft from '../assets/images/texto_2_imagens_a_esquerda.jpg';
import textTwoImagesRight from '../assets/images/texto_2_imagens_a_direita.jpg';
import seals from '../enums/ESeals';
import { Complexity } from '../enums/EComplexity';

const modules: IModule[] = [
  {
    id: 1,
    name: 'Imagem Full',
    complexity: Complexity.LOW,
    description: 'A imagem tem largura fixa e altura variável. Pode ser usado para banner principais, reengajamento ou faixas.',
    seals: [seals.RECOMMENDED, seals.AGILE],
    image: imageFull as string,
  },
  {
    id: 2,
    name: '2 Imagens Laterais',
    complexity: Complexity.LOW,
    description: 'Pode ser usado simulando 1 imagem com 2 links ou 2 imagens com 2 links.',
    image: LateralImages as string,
  },
  {
    id: 3,
    name: '4 Imagens Sequenciais',
    complexity: Complexity.MEDIUM,
    description: 'Até 4 imagens com até 4 links, todas com largura fixa e altura variável. Pode ser usado para simular uma imagem contínua com diferentes links ou diferentes imagens com diferentes links.',
    seals: [seals.VERSATILE],
    image: fourSequencialImages as string,
  },
  {
    id: 4,
    name: '2 Imagens',
    complexity: Complexity.LOW,
    description: '2 links, um para cada imagem. As imagens têm largura fixa e altura livre.',
    seals: [seals.WIDELY_USED, seals.AGILE],
    image: twoImages as string,
  },
  {
    id: 5,
    name: '3 Imagens',
    complexity: Complexity.LOW,
    description: '3 links, um para cada imagem. As imagens têm largura fixa e altura livre.',
    seals: [seals.WIDELY_USED],
    image: threeImages as string,
  },
  {
    id: 6,
    name: '4 Imagens',
    complexity: Complexity.LOW,
    description: '4 links, um para cada imagem. As imagens têm largura fixa e altura livre.',
    image: fourImages as string,
  },
  {
    id: 7,
    name: '5 Imagens',
    complexity: Complexity.MEDIUM,
    description: '5 links, um para cada imagem. As imagens têm largura fixa e altura livre.',
    image: fiveImages as string,
  },
  {
    id: 8,
    name: 'Mosaico 4 Imagens',
    complexity: Complexity.LOW,
    description: '4 links, um para cada imagem. As imagens têm largura fixa e altura livre.',
    seals: [seals.SURPRISE],
    image: mosaico4Images as string,
  },
  {
    id: 9,
    name: 'Título secundário',
    complexity: Complexity.LOW,
    description: 'Pode ser utilizado antes de diferentes módulos como título de uma seção específica do e-mail. ',
    seals: [seals.RECOMMENDED],
    image: secondaryTitle as string,
  },
  {
    id: 10,
    name: 'Texto 1 coluna sem fundo',
    complexity: Complexity.MEDIUM,
    description: 'Fundo sempre branco.',
    seals: [seals.WIDELY_USED],
    image: text1ColumnNoBG as string,
  },
  {
    id: 11,
    name: 'Texto 1 coluna (fundo em cor)',
    complexity: Complexity.MEDIUM,
    description: 'Cor do fundo pode ter 3 opções de cor.1 será padrão + 2 alternativas.',
    seals: [seals.VERSATILE],
    image: text1ColumnBG as string,
  },
  {
    id: 12,
    name: '2 Colunas de Texto',
    complexity: Complexity.MEDIUM,
    description: '2 links, um para cada coluna.',
    seals: [seals.CONTENT],
    image: twoTextColumns as string,
  },
  {
    id: 13,
    name: 'Texto com 2 colunas',
    complexity: Complexity.MEDIUM,
    description: '1 link para ambas as colunas.',
    image: textWithTwoColumns as string,
  },
  {
    id: 14,
    name: '3 Colunas de Texto',
    complexity: Complexity.MEDIUM,
    description: '3 links, um para cada coluna.',
    image: threeTextColumns as string,
  },
  {
    id: 15,
    name: 'Texto com 3 colunas',
    complexity: Complexity.MEDIUM,
    description: '1 link para todas as colunas.',
    image: textWithThreeColumns as string,
  },
  {
    id: 16,
    name: 'Imagem de Fundo + Texto Simples',
    complexity: Complexity.MEDIUM,
    description: 'A imagem vai como fundo do módulo e os textos são editáveis. * Este módulo tem suporte apenas parcial em alguns serviços de e - mail como o Windows Mail.Contudo, funciona normalmente nos principais serviços como Apple Mail, Outlook.com, Gmail e seus respectivos aplicativos Mobile.',
    seals: [seals.AGILE],
    image: bgImageSimpleText as string,
  },
  {
    id: 17,
    name: 'Imagem de Fundo + Texto Completo.',
    complexity: Complexity.HIGH,
    description: 'A imagem vai como fundo do módulo e os textos são editáveis. * Este módulo tem suporte apenas parcial em alguns serviços de e - mail como o Windows Mail.Contudo, funciona normalmente nos principais serviços como Apple Mail, Outlook.com, Gmail e seus respectivos aplicativos Mobile.',
    seals: [seals.AGILE],
    image: bgImageCompleteText as string,
  },
  {
    id: 18,
    name: 'Texto e Imagem à Esquerda',
    complexity: Complexity.MEDIUM,
    description: '',
    seals: [seals.WIDELY_USED],
    image: leftTextImage as string,
  },
  {
    id: 19,
    name: 'Texto e Imagem à Direita',
    complexity: Complexity.MEDIUM,
    description: '',
    seals: [seals.WIDELY_USED],
    image: rightTextImage as string,
  },
  {
    id: 20,
    name: 'Texto e 2 Imagens à Esquerda',
    complexity: Complexity.MEDIUM,
    description: '',
    image: textTwoImagesLeft as string,
  },
  {
    id: 21,
    name: 'Texto e 2 Imagens à Direita',
    complexity: Complexity.MEDIUM,
    description: '',
    image: textTwoImagesRight as string,
  },
];

export default modules;
