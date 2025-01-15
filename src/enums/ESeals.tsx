import { ReactComponent as starIcon } from '../assets/svgs/star.svg';
import { ReactComponent as sunIcon } from '../assets/svgs/sun.svg';
import { ReactComponent as blackStarIcon } from '../assets/svgs/blackStar.svg';

const ESealsNames = {
  RECOMMENDED: {
    id: 1,
    text: 'Recomendado em todos os Templates',
    color: '#324095',
    Icon: starIcon,
    fontColor: '#ffffff',
  },
  AGILE: {
    id: 2,
    text: 'Ágil no dia-a-dia',
    color: '#67D03B',
    Icon: blackStarIcon,
    fontColor: '#000000',
  },
  VERSATILE: {
    id: 3,
    text: 'Versátil',
    color: '#666666',
    Icon: sunIcon,
    fontColor: '#ffffff',
  },
  WIDELY_USED: {
    id: 4,
    text: 'Muito utilizado',
    color: '#324095',
    Icon: starIcon,
    fontColor: '#ffffff',
  },
  SURPRISE: {
    id: 5,
    text: 'Surpreenda',
    color: '#324095',
    Icon: starIcon,
    fontColor: '#ffffff',
  },
  CONTENT: {
    id: 6,
    text: 'Conteúdo',
    color: '#324095',
    Icon: starIcon,
    fontColor: '#ffffff',
  },
};

export default ESealsNames;
