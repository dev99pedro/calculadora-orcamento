import styled from 'styled-components';
import ComplexityBullets from '../atoms/ComplexityBullets';
import complexities from '../../infos/ComplexityInfos';
import ComplexityTitle from '../atoms/ComplexityTitle';
import Tooltip from './Tooltip';

const DivComplexity = styled.div``;

const DivComplexities = styled.div`
display: flex;
gap: 40px;
`;

function Complexity(): JSX.Element {
  return (
    <DivComplexities>
      {complexities.map((complexity) => (
        <DivComplexity key={complexity.id}>
          <ComplexityBullets
            highlightBullets={complexity.priority}
            highlightColor={complexity.color}
          />
          <Tooltip tooltip={complexity.tooltip}>
            <ComplexityTitle title={complexity.type} />
          </Tooltip>
        </DivComplexity>
      ))}
    </DivComplexities>
  );
}

export default Complexity;
