import styled from 'styled-components';

interface ModuleDescriptionProps {
  description: string;
}

const StyledModuleDescription = styled.div`
  color: #666666;
  font-size: 14px;
  width: 290px;
`;

function ModuleDescription({ description }: ModuleDescriptionProps): JSX.Element {
  return (
    <StyledModuleDescription>
      {description}
    </StyledModuleDescription>
  );
}

export default ModuleDescription;
