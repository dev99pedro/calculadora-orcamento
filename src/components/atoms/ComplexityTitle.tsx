import styled from 'styled-components';
import IComplexityTitle from '../../interfaces/IComplexityTitle';
import iconTooltip from '../../assets/images/tooltip.svg';

const HeadingComplexityTitle = styled.h6`
color: #111;
font-size: 14px;
font-weight: 700;
display: flex; 
align-items: end;
gap: 4px;
margin: 0; 
padding: 0; 
`;

function ComplexityTitle({ title }: IComplexityTitle): JSX.Element {
  return (
    <HeadingComplexityTitle>
      {title}
      <img src={iconTooltip} alt="" />
    </HeadingComplexityTitle>
  );
}

export default ComplexityTitle;
