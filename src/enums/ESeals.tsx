import { ReactComponent as starIcon } from '../assets/svgs/star.svg';
import { ReactComponent as sunIcon } from '../assets/svgs/sun.svg';
import { ReactComponent as blackStarIcon } from '../assets/svgs/blackStar.svg';

const ESealsNames = {
  RECOMMENDED: { text: 'Recomendado em todos os Templates', color: '#324095', Icon: starIcon },
  AGILE: { text: 'Ágil no dia-a-dia', color: '#67D03B', Icon: blackStarIcon },
  VERSATILE: { text: 'Versátil', color: '#666666', Icon: sunIcon },
  WIDELY_USED: { text: 'Muito utilizado', color: '#324095', Icon: starIcon },
  SURPRISE: { text: 'Surpreenda', color: '#324095', Icon: starIcon },
  CONTENT: { text: 'Conteúdo', color: '#324095', Icon: starIcon },
};

export default ESealsNames;
