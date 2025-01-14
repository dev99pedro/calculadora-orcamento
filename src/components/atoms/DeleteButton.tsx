import { ReactComponent as DeleteIcon } from '../../assets/svgs/delete.svg';

interface DeleteButtonProps {
  deleted: () => void;
}

function DeleteButton({ deleted }: DeleteButtonProps): JSX.Element {
  return (
    <DeleteIcon onClick={() => { deleted(); }} />
  );
}

export default DeleteButton;
