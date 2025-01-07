import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from '../../assets/svgs/delete.svg';

const StyledIcon = styled.div`
  position: absolute;
  left: 7px;
  svg{
    width: 60px;
    height: 60px;
    cursor: pointer;
  }
`;

interface DeleteButtonProps {
  deleted: () => void;
}

function DeleteButton({ deleted }: DeleteButtonProps): JSX.Element {
  return (
    <StyledIcon>
      <DeleteIcon onClick={() => { deleted(); }} />
    </StyledIcon>
  );
}

export default DeleteButton;
