import styled from 'styled-components';

const StyledModuleImage = styled.img`
  width: 330px;
`;

interface ModuleImageProps {
  src: string;
}

function ModuleImage({ src }: ModuleImageProps): JSX.Element {
  return (
    <StyledModuleImage src={src} />
  );
}

export default ModuleImage;
