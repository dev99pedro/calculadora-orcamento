import styled from 'styled-components';

const StyledSealContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  width: 312px;
  padding-top: 21px;
`;

function SealContainer({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <StyledSealContainer>
      {children}
    </StyledSealContainer>
  );
}

export default SealContainer;
