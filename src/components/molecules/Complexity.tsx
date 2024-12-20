import Sphere from '../atoms/Sphere';
import { ComplexityColorSet, ComplexityLevel } from '../../enums/ComplexityColorSet';
import { ComplexityName, ComplexityNameType } from '../../enums/ComplexityName';

interface ComplexityProps {
  name: string,
  level: ComplexityLevel,
}

function Complexity({ name, level }: ComplexityProps): JSX.Element {
  return (
    <>
      {ComplexityName[level]}
      {(ComplexityColorSet[level]).map((color) => (
        <Sphere key={name} color={color} />
      ))}
    </>
  );
}

export default Complexity;
