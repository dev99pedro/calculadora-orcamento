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

const modules: IModule[] = [
  {
    name: 'Imagem Full',
    complexity: 'low',
    description: 'A imagem tem largura fixa e altura variável. Pode ser usado para banner principais, reengajamento ou faixas.',
    seals: ['Recomendado', 'Ágil'],
    image: imageFull as string,
  },
  {
    name: '2 Imagens Laterais',
    complexity: 'low',
    description: 'Pode ser usado simulando 1 imagem com 2 links ou 2 imagens com 2 links.',
    image: LateralImages as string,
  },
  {
    name: '4 Imagens Sequenciais',
    complexity: 'medium',
    description: 'Até 4 imagens com até 4 links, todas com largura fixa e altura variável. Pode ser usado para simular uma imagem contínua com diferentes links ou diferentes imagens com diferentes links.',
    seals: ['Versátil', '-'],
    image: fourSequencialImages as string,
  },
  {
    name: '2 Imagens',
    complexity: 'low',
    description: '2 links, um para cada imagem. As imagens têm largura fixa e altura livre.',
    seals: ['Muito utilizado', 'Ágil'],
    image: twoImages as string,
  },
  {
    name: '3 Imagens',
    complexity: 'low',
    description: '3 links, um para cada imagem. As imagens têm largura fixa e altura livre.',
    seals: ['Muito utilizado', '-'],
    image: threeImages as string,
  },
  {
    name: '4 Imagens',
    complexity: 'low',
    description: '4 links, um para cada imagem. As imagens têm largura fixa e altura livre.',
    image: fourImages as string,
  },
  {
    name: '5 Imagens',
    complexity: 'medium',
    description: '5 links, um para cada imagem. As imagens têm largura fixa e altura livre.',
    image: fiveImages as string,
  },
  {
    name: 'Mosaico 4 Imagens',
    complexity: 'low',
    description: '4 links, um para cada imagem. As imagens têm largura fixa e altura livre.',
    seals: ['Surpreenda', '-'],
    image: mosaico4Images as string,
  },
  {
    name: 'Título secundário',
    complexity: 'low',
    description: 'Pode ser utilizado antes de diferentes módulos como título de uma seção específica do e-mail. ',
    seals: ['Recomendado', '-'],
    image: secondaryTitle as string,
  },
  {
    name: 'Texto 1 coluna sem fundo',
    complexity: 'medium',
    description: 'Fundo sempre branco.',
    seals: ['Muito utilizado', '-'],
    image: text1ColumnNoBG as string,
  },
  {
    name: 'Texto 1 coluna (fundo em cor)',
    complexity: 'medium',
    description: 'Cor do fundo pode ter 3 opções de cor.1 será padrão + 2 alternativas.',
    seals: ['Versátil', '-'],
    image: text1ColumnBG as string,
  },
  {
    name: '2 Colunas de Texto',
    complexity: 'medium',
    description: '2 links, um para cada coluna.',
    seals: ['Conteúdo', '-'],
    image: twoTextColumns as string,
  },
  {
    name: 'Texto com 2 colunas',
    complexity: 'medium',
    description: '1 link para ambas as colunas.',
    image: textWithTwoColumns as string,
  },
  {
    name: '3 Colunas de Texto',
    complexity: 'medium',
    description: '3 links, um para cada coluna.',
    image: threeTextColumns as string,
  },
  {
    name: 'Texto com 3 colunas',
    complexity: 'medium',
    description: '1 link para todas as colunas.',
    image: textWithThreeColumns as string,
  },
  {
    name: 'Imagem de Fundo + Texto Simples',
    complexity: 'medium',
    description: 'A imagem vai como fundo do módulo e os textos são editáveis. * Este módulo tem suporte apenas parcial em alguns serviços de e - mail como o Windows Mail.Contudo, funciona normalmente nos principais serviços como Apple Mail, Outlook.com, Gmail e seus respectivos aplicativos Mobile.',
    seals: ['Ágil', '-'],
    image: bgImageSimpleText as string,
  },
  {
    name: 'Imagem de Fundo + Texto Completo.',
    complexity: 'high',
    description: 'A imagem vai como fundo do módulo e os textos são editáveis. * Este módulo tem suporte apenas parcial em alguns serviços de e - mail como o Windows Mail.Contudo, funciona normalmente nos principais serviços como Apple Mail, Outlook.com, Gmail e seus respectivos aplicativos Mobile.',
    seals: ['Ágil', '-'],
    image: bgImageCompleteText as string,
  },
  {
    name: 'Texto e Imagem à Esquerda',
    complexity: 'medium',
    description: '',
    seals: ['Muito utilizado', '-'],
    image: leftTextImage as string,
  },
  {
    name: 'Texto e Imagem à Direita',
    complexity: 'medium',
    description: '',
    seals: ['Muito utilizado', '-'],
    image: rightTextImage as string,
  },
  {
    name: 'Texto e 2 Imagens à Esquerda',
    complexity: 'medium',
    description: '',
    image: textTwoImagesLeft as string,
  },
  {
    name: 'Texto e 2 Imagens à Direita',
    complexity: 'medium',
    description: '',
    image: textTwoImagesRight as string,
  },
];

export default modules;
