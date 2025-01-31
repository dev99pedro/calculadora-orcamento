import styled from 'styled-components';
import Sphere from '../atoms/Sphere';
import { ComplexityColorSet, ComplexityLevel } from '../../enums/EComplexityColorSet';
import ComplexityTitle from '../atoms/ComplexityTitle';

interface ComplexityProps {
  level: ComplexityLevel,
}

const StyledContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const StyledSphere = styled.div`
  display: flex;
  gap: 2px;
`;

function Complexity({ level }: ComplexityProps): JSX.Element {
  return (
    <StyledContainer>
      <StyledSphere>
        <Sphere color={ComplexityColorSet[level][0]} />
        <Sphere color={ComplexityColorSet[level][1]} />
        <Sphere color={ComplexityColorSet[level][2]} />
      </StyledSphere>
      <ComplexityTitle title={level} />
    </StyledContainer>
  );
}

export default Complexity;
