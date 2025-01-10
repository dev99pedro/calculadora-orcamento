import styled from 'styled-components';
import AccordionTitle from '../atoms/AccordionTitle';
import Complexity from './Complexity';

const DivAccordion = styled.div`
border-radius: 10px;
background: #FFF;
padding: 25px;
`;

function ModulesSelected(): JSX.Element {
  return (
    <DivAccordion>
      <AccordionTitle quantity={18} title="módulos selecionados" />
      <Complexity />
    </DivAccordion>
  );
}

export default ModulesSelected;
