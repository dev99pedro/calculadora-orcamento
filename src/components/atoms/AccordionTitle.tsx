import styled from 'styled-components';
import IAccordionTitle from '../../interfaces/IAccordionTitle';

const HeadingAccordionTitle = styled.h4`
color: #111;
font-size: 16px;
font-weight: 400;
line-height: 18px;
display: block;
margin: 0; 
padding: 0; 
`;

const HighlightAccordionTitle = styled.strong`
font-size: 18px;
font-weight: 700;
`;

function AccordionTitle({ quantity, title }: IAccordionTitle): JSX.Element {
  return (
    <HeadingAccordionTitle>
      <HighlightAccordionTitle>{`${quantity} `}</HighlightAccordionTitle>
      { title }
    </HeadingAccordionTitle>
  );
}

export default AccordionTitle;
