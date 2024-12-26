import styled from 'styled-components';

const StyledModulesInfos = styled.div`
    height: 212px;
`;

function ModulesInfos({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <StyledModulesInfos>
      {children}
    </StyledModulesInfos>
  );
}

export default ModulesInfos;
