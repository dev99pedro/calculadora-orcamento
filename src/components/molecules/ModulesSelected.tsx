import styled from 'styled-components';
import BlockComplexity from './BlockComplexity';
import Accordion from './Accordion';

const DivAccordion = styled.div`
border-radius: 10px;
background: #FFF;
padding: 25px;
`;

function ModulesSelected(): JSX.Element {
  return (
    <DivAccordion>
      <Accordion quantity={18} title="módulos selecionados">
        <BlockComplexity />
      </Accordion>
    </DivAccordion>
  );
}

export default ModulesSelected;
