import styled from 'styled-components';

interface ComplexityTitleProps {
  title: string;
}

const StyledComplexityTitle = styled.div`
  color: #111111;
  font-size: 14px;
`;

function ComplexityTitle({ title }: ComplexityTitleProps): JSX.Element {
  return (
    <StyledComplexityTitle>
      {title}
    </StyledComplexityTitle>
  );
}

export default ComplexityTitle;
