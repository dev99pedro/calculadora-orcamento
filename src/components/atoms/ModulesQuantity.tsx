import styled from 'styled-components';
import IModulesQuantity from '../../interfaces/IModulesQuantity';

const SpanModulesQuantity = styled.span`
  color: #515151;
  font-size: 14px;
  background-color: #EBEBEB;
  padding: 2px 4px;
  display: block;
  border-radius: 5px;
`;

const SpanQuantityNumber = styled.span`
  font-weight: 700;
`;

function ModulesQuantity({ quantity }: IModulesQuantity): JSX.Element {
  return (
    <SpanModulesQuantity>
      <SpanQuantityNumber>
        { quantity }
      </SpanQuantityNumber>
      módulos
    </SpanModulesQuantity>
  );
}

export default ModulesQuantity;
