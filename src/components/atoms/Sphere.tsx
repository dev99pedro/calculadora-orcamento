import styled from 'styled-components';

const StyledSphere = styled.div`
  background-color:  ${(props) => props.color};
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

interface SphereProps {
  color: string;
}

function Sphere({ color }: SphereProps): JSX.Element {
  return <StyledSphere color={color} />;
}

export default Sphere;
