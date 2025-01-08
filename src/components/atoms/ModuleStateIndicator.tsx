import { useState, useEffect } from 'react';
import styled from 'styled-components';

function getIndicatorColor(props: {
  selected: boolean,
}): string {
  return props.selected ? '#3C7D7F' : '#F05F5F';
}

const StyledModuleStateIndicator = styled.div<{ opacity: number, selected: boolean }>`
    display: flex;
    opacity: ${(props) => props.opacity};
    color: ${(props) => getIndicatorColor(props)};
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    width: 84px;
    height: 35px;
    border: 1px solid ${(props) => getIndicatorColor(props)};
    position: absolute;
    left: 65px;
    background: #ffffff;
    transition: opacity 0.5s ease-in-out;
    border-radius: 12px;
`;

interface ModuleStateIndicatorProps {
  selected: boolean;
  isUserClick: boolean;
  setCanChange: () => void;
}

function ModuleStateIndicator({
  selected,
  isUserClick,
  setCanChange,
}: ModuleStateIndicatorProps): JSX.Element {
  const [title, setTitle] = useState<string>('');
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    setTitle(selected ? 'Adicionado' : 'Removido');
    if (!isUserClick) return;
    setOpacity(1);
    setTimeout(() => {
      setOpacity(0);
      setCanChange();
    }, 2000);
  }, [selected, isUserClick]);

  return (
    <StyledModuleStateIndicator selected={selected} opacity={opacity}>
      {title}
    </StyledModuleStateIndicator>
  );
}

export default ModuleStateIndicator;
