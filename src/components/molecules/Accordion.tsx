import { useState } from 'react';
import styled from 'styled-components';
import IAccordion from '../../interfaces/IAccordion';
import iconArrow from '../../assets/svg/arrow.svg';

const HeadingAccordionTitle = styled.h4<{ isOpen: boolean }>`
color: #111;
font-size: 16px;
font-weight: 400;
line-height: 18px;
display: block;
margin: 0; 
padding: 0;
display: flex;
justify-content: space-between;
align-items: center;
  img {
    transition: transform 0.3s ease, color 0.3s ease;
    transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`

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
      <div onClick={toggleAccordion} onKeyDown={toggleAccordion} role="button" tabIndex={0} style={{ marginBottom: '20px' }}>
        <HeadingAccordionTitle isOpen={isOpen}>
          <span>
            <HighlightAccordionTitle>{`${quantity} `}</HighlightAccordionTitle>
            { title }
          </span>
          <span>
            <img src={iconArrow} alt="" />
          </span>
        </HeadingAccordionTitle>
      </div>
      {isOpen && (
        <AccordionContent isOpen={isOpen}>
          {children}
        </AccordionContent>
      )}
    </div>
  );
}

export default Accordion;
