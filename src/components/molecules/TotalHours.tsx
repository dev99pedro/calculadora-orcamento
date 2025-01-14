import styled from 'styled-components';
import Accordion from './Accordion';

const DivAccordion = styled.div`
border-radius: 10px;
background: #FFF;
padding: 25px;
margin-top: 20px;
`;

function TotalHours(): JSX.Element {
  return (
    <DivAccordion>
      <Accordion quantity={51} title="horas totais" />
    </DivAccordion>
  );
}

export default TotalHours;
