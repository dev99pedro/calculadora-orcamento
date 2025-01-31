import styled from 'styled-components';
import Accordion from './Accordion';
import DifficultyLevels from './DifficultyLevels';
import Creative from '../molecules/Creative';

const StyledBudget = styled.div`
  display: flex;
  padding: 10px 0px;
  flex-direction: column;
  gap: 20px;
`;

const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #F5F5F5;
  padding: 30px;
  border-radius: 20px;
  width: 380px;
`;

const StyledSummaryTitle = styled.h3`
  color: #111;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
`;

const StyledHeader = styled.div`
  color: #000;
  width: 400px;
  display: flex;
  padding: 10px 0px;
  flex-direction: column;
  gap: 15px;
`;

const StyledDescription = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
`;

const StyledTitle = styled.h1`
  font-size: 46px;
  font-weight: 700;
  line-height: 48px;
  padding: 0;
  margin: 0;
`;

const StyledSubtitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding: 0;
  margin: 0;
`;

const StyledHelp = styled.span`
  padding: 10px 0px;
  color: #888;
  font-size: 14px;
  font-weight: 400;
`;

const StyledHref = styled.a`
  color: #888;
  font-weight: 700;
  text-decoration-line: underline;
`;

function BudgetSummary(): JSX.Element {
  return (
    <StyledBudget>
      {/* Separar  StyledHeader */}
      <StyledHeader>
        <StyledDescription>
          Template Modular Pmweb
        </StyledDescription>
        <StyledTitle>
          Calculadora de Orçamentos.
        </StyledTitle>
        <StyledSubtitle>
          Navegue em nosso catálogo e selecione os módulos
          certos para construir seu Template Modular.  ➜
        </StyledSubtitle>
        {/* ➜ */}
        <StyledHelp>
          🆘 Precisa de
          <StyledHref href="http://" target="_blank">
            ajuda
          </StyledHref>
          ?
        </StyledHelp>
      </StyledHeader>
      <StyledSummary>
        <StyledSummaryTitle>Seu Template</StyledSummaryTitle>
        <Accordion count={18} description="módulos selecionados">
          <DifficultyLevels />
        </Accordion>
        <Creative />
        <Accordion count={51} description="horas totais">
          <div>Accordion</div>
        </Accordion>
      </StyledSummary>
    </StyledBudget>
  );
}

export default BudgetSummary;

// BudgetSummary
