import styled from 'styled-components';
import Sphere from '../atoms/Sphere';
import { ComplexityColorSet, ComplexityLevel } from '../../enums/ComplexityColorSet';
import { ComplexityName, ComplexityNameType } from '../../enums/ComplexityName';
import ComplexityTitle from '../atoms/ComplexityTitle';

interface ComplexityProps {
  name: string,
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

function Complexity({ name, level }: ComplexityProps): JSX.Element {
  return (
    <StyledContainer>
      <StyledSphere>
        {(ComplexityColorSet[level]).map((color) => (
          <Sphere key={name} color={color} />
        ))}
      </StyledSphere>
      <ComplexityTitle title={ComplexityName[level] as ComplexityNameType} />
    </StyledContainer>
  );
}

export default Complexity;
