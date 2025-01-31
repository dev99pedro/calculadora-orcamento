import styled from 'styled-components';

interface ModuleTitleProps {
  title: string;
}

const StyledModuleTitle = styled.div`
  color: #111111;
  font-size: 24px;
  font-weight: 700;
  margin: 20px 0 10px;
  width: 250px;
`;

function ModuleTitle({ title }: ModuleTitleProps): JSX.Element {
  return (
    <StyledModuleTitle>
      {title}
    </StyledModuleTitle>
  );
}

export default ModuleTitle;
