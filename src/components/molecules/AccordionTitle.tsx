import styled from 'styled-components';
import AccordionIcon from '../atoms/AccordionIcon';

interface AccordionTitleProps {
  count: number;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
}

const StyledTitle = styled.button`
  all: unset;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

const StyledContent = styled.span`
  color: #111;
  display: flex;
  align-items: inherit;
  gap: 4px;
`;

const StyledCount = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const StyledDescription = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

function AccordionTitle({
  count,
  description,
  isOpen,
  onToggle,
}: AccordionTitleProps): JSX.Element {
  return (
    <StyledTitle onClick={onToggle}>
      <StyledContent>
        <StyledCount>{count}</StyledCount>
        <StyledDescription>{description}</StyledDescription>
      </StyledContent>
      <AccordionIcon $isOpen={isOpen} />
    </StyledTitle>
  );
}

export default AccordionTitle;

// AccordionTitle
