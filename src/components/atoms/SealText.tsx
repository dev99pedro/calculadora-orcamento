import styled from 'styled-components';

const StyledSealText = styled.div`
  color: white;
  font-size: 10px;
  max-width: 90px;
`;

interface SealTextProps {
  text: string;
}

function SealText({ text }: SealTextProps): JSX.Element {
  return (
    <StyledSealText>
      {text}
    </StyledSealText>
  );
}

export default SealText;
