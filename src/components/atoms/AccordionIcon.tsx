import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../../assets/svgs/chevron-down.svg';

interface AccordionIconProps {
  $isOpen: boolean;
}

const StyledIcon = styled.span<{ $isOpen: boolean }>`
  transition: transform 0.3s ease-in-out;
  transform: rotate(${({ $isOpen }) => ($isOpen ? '180deg' : '0deg')});
`;

function AccordionIcon({ $isOpen }: AccordionIconProps): JSX.Element {
  return (
    <StyledIcon $isOpen={$isOpen}>
      {/* <ArrowIcon /> */}
      Seta
    </StyledIcon>
  );
}

export default AccordionIcon;

// AccordionIcon
// data-*
