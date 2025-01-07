import styled from 'styled-components';

const StyledModuleStateIndicator = styled.div`
    width: 84px;
    height: 35px;
`;

interface ModuleStateIndicatorProps {
  state: string;
}

function ModuleStateIndicator({ state } : ModuleStateIndicatorProps): JSX.Element {
  return (
    <StyledModuleStateIndicator>
      {state}
    </StyledModuleStateIndicator>
  );
}

export default ModuleStateIndicator;
