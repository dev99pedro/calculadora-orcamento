import styled from 'styled-components';

const StyledModuleButtonContainer = styled.div`
  display: flex;
  position: absolute;
  left: 11px;
  svg{
    width: 46px;
    height: 46px;
    box-shadow: rgba(0, 0, 0, 0.5)  5px 5px 15px -8px;
    border-radius: 50%;
    cursor: pointer;
    g{
      transform: translate(-4.5px, -3.5px);
    }
  }
`;

function ModuleButtonContainer({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <StyledModuleButtonContainer>
      {children}
    </StyledModuleButtonContainer>
  );
}
export default ModuleButtonContainer;
