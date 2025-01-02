import styled from 'styled-components';

const StyledSealContainer = styled.div`
  width: 135px;
  height: 35px;
`;

interface SealProps {
  sealText: string;
}

function SealContainer({ sealText }: SealProps): JSX.Element {
  return (
    <StyledSealContainer>
      {sealText}
    </StyledSealContainer>
  );
}

export default SealContainer;
