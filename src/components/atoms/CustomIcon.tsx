import styled from 'styled-components';

const StyledCustomIcon = styled.div`
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -0.5px;
  svg{
    min-width: 16px;
    min-height: 16px;
  }
`;

function CustomIcon({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <StyledCustomIcon>
      {children}
    </StyledCustomIcon>
  );
}

export default CustomIcon;
