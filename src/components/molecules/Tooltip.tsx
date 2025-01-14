import { useState } from 'react';
import styled from 'styled-components';
import ITooltip from '../../interfaces/ITooltip';

const DivTooltip = styled.div`
  position: relative;
`;

const DivTooltipDescription = styled.div`
  position: absolute;
`;

function Tooltip({ tooltip, children }: ITooltip): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = (): void => setIsVisible(true);
  const hideTooltip = (): void => setIsVisible(false);

  return (
    <DivTooltip
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && (
        <DivTooltipDescription>
          {tooltip}
        </DivTooltipDescription>
      )}
    </DivTooltip>
  );
}

export default Tooltip;
