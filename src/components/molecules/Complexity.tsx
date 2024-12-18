import Sphere from '../atoms/Sphere';

interface ComplexityProps {
  level: 'high' | 'low'; // Restrição explícita dos valores possíveis
}

function Complexity({ level }: ComplexityProps): JSX.Element {
  return (
    <>
      {level === 'high' ? (
        <>
          <Sphere color="#67D03B" />
          <Sphere color="red" />
          <Sphere color="red" />
        </>
      ) : null}
      {/* Retorna null para o caso de 'low' */}
    </>
  );
}

export default Complexity;
