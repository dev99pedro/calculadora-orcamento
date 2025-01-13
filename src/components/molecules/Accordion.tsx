import { useState } from 'react';
import styled from 'styled-components';
import IAccordion from '../../interfaces/IAccordion';

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

function Accordion({ quantity, title, children }: IAccordion): JSX.Element {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div onClick={toggleAccordion} onKeyDown={toggleAccordion} role="button" tabIndex={0}>
        <HeadingAccordionTitle>
          <HighlightAccordionTitle>{`${quantity} `}</HighlightAccordionTitle>
          { title }
        </HeadingAccordionTitle>
      </div>
      {isOpen && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;
