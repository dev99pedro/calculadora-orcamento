import styled from 'styled-components';
import ComplexityBullets from './ComplexityBullets';
import complexities from '../../infos/ComplexityInfos';
import ComplexityTitle from '../atoms/ComplexityTitle';
import Tooltip from './Tooltip';
import ModulesQuantity from '../atoms/ModulesQuantity';

const DivComplexities = styled.div`
display: flex;
gap: 40px;
`;

const HeadingComplexitiesTitle = styled.h6`
color: #111;
font-size: 12px;
font-weight: 400;
margin: 0; 
padding: 0;
margin-bottom: 10px;
`;

const SpanComplexityEstimate = styled.span`
color: #515151;
font-size: 14px;
font-weight: 400;
`;

const SpanComplexityHours = styled.span<{ color: string }>`
color: ${(props) => props.color};
font-weight: 700;
`;

const DivComplexity = styled.div``;

function Complexity(): JSX.Element {
  return (
    <>
      <HeadingComplexitiesTitle>
        Complexidade:
      </HeadingComplexitiesTitle>
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
            <SpanComplexityEstimate>
              <SpanComplexityHours color={complexity.color}>
                {complexity.estimate}
                h
              </SpanComplexityHours>
              /módulo
            </SpanComplexityEstimate>
            <ModulesQuantity quantity={0} />
          </DivComplexity>
        ))}
      </DivComplexities>
    </>
  );
}

export default Complexity;
