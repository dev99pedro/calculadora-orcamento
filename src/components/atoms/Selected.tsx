import styled from 'styled-components';
import { ReactComponent as SelectedIcon } from '../../assets/svgs/selected.svg';

const StyledIcon = styled.div`
  position: absolute;
  left: 7px;
  svg{
    width: 60px;
    height: 60px;
    cursor: pointer;
  }
`;

function Selected(): JSX.Element {
  return (
    <StyledIcon>
      <SelectedIcon />
    </StyledIcon>
  );
}

export default Selected;
