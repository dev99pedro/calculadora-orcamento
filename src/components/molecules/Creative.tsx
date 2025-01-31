import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 10px;
`;

const StyledHeader = styled.div``;

const StyledTitle = styled.h6`
  color: #111;
  font-size: 16px;
  font-weight: 400;
  padding: 0;
  margin: 0;
`;

const StyledToggle = styled.div``;

const StyledLabel = styled.span`
  color: #515151;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
`;

const StyledItalic = styled.i`
  color: #ABABAB;
`;

function Creative(): JSX.Element {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>
          Adicionar um
          <strong> Kit Criativo?</strong>
        </StyledTitle>
      </StyledHeader>
      <StyledToggle>
        <StyledLabel>
          +15 horas
          <StyledItalic> (opcional)</StyledItalic>
        </StyledLabel>
      </StyledToggle>
    </StyledContainer>
  );
}

export default Creative;

// Creative
