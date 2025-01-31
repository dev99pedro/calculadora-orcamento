import {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import AccordionTitle from '../molecules/AccordionTitle';

interface AccordionItemProps {
  count: number;
  description: string;
  children: ReactNode;
}

const StyledContainer = styled.div<{ $isOpen: boolean }>`
  padding: 25px;
  background-color: #FFF;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: ${({ $isOpen }) => ($isOpen ? '15px' : '0')};
`;

const StyledAccordionContent = styled.div<{
  $isOpen: boolean;
  $contentHeight: number;
}>`
  max-height: ${({ $isOpen, $contentHeight }) => ($isOpen ? `${$contentHeight}px` : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
`;

function AccordionItem({
  count,
  description,
  children,
}: AccordionItemProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(true);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const onToggle = (): void => {
    setIsOpen((previousState) => !previousState);
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <StyledContainer $isOpen={isOpen}>
      <AccordionTitle
        count={count}
        description={description}
        onToggle={onToggle}
        isOpen={isOpen}
      />
      <StyledAccordionContent
        $isOpen={isOpen}
        $contentHeight={contentHeight}
        ref={contentRef}
      >
        {children}
      </StyledAccordionContent>
    </StyledContainer>
  );
}

export default AccordionItem;

// AccordionItem
