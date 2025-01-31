import { useState } from 'react';
import styled from 'styled-components';

interface TooltipProps {
  icon: React.ReactNode;
  content: string;
}

const StyledContainer = styled.div`
  position: relative;
  color: #111;
  font-size: 14px;
  font-weight: 700;
`;

const StyledIcon = styled.span``;

const StyledContent = styled.span<{ $visible: boolean }>`
  position: absolute;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;

function Tooltip({ icon, content }: TooltipProps): JSX.Element {
  const [visible, setVisible] = useState(false);
  return (
    <StyledContainer
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <StyledIcon>{ icon }</StyledIcon>
      {visible && <StyledContent $visible={visible}>{ content }</StyledContent> }
    </StyledContainer>
  );
}

export default Tooltip;

// Tooltip
