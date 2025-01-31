import styled from 'styled-components';
import ISeal from '../../interfaces/ISeal';
import CustomIcon from '../atoms/CustomIcon';
import SealText from '../atoms/SealText';

const StyledSeal = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  width: 129px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 500;
`;

function Seal({
  color,
  text,
  Icon,
  fontColor,
}: ISeal): JSX.Element {
  return (
    <StyledSeal color={color}>
      <CustomIcon><Icon /></CustomIcon>
      <SealText text={text} fontColor={fontColor} />
    </StyledSeal>
  );
}

export default Seal;
