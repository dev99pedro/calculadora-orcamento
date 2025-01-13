import styled from 'styled-components';
import Complexity from './Complexity';
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
        <Complexity />
      </Accordion>
    </DivAccordion>
  );
}

export default ModulesSelected;
