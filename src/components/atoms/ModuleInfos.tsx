import styled from 'styled-components';

const StyledModulesInfos = styled.div`
  align-self: center;
`;

function ModulesInfos({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <StyledModulesInfos>
      {children}
    </StyledModulesInfos>
  );
}

export default ModulesInfos;
