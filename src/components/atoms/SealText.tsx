import styled from 'styled-components';

const StyledSealText = styled.div<{ fontColor: string }>`
  color: ${(props) => props.fontColor};
  font-size: 10px;
  max-width: 90px;
`;

interface SealTextProps {
  text: string;
  fontColor: string;
}

function SealText({ text, fontColor }: SealTextProps): JSX.Element {
  return (
    <StyledSealText fontColor={fontColor}>
      {text}
    </StyledSealText>
  );
}

export default SealText;
