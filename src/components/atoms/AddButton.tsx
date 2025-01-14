import {
  Dispatch,
  SetStateAction,
} from 'react';
import styled from 'styled-components';
import { ReactComponent as AddIcon } from '../../assets/svgs/add.svg';

const StyledIcon = styled.div<{ isHovered: boolean }>`
  display: flex;
    rect:nth-of-type(1) {
      fill: ${(props) => (props.isHovered ? '#78B2B4' : '#FCF4E6')}
    }
    rect:nth-of-type(2) {
      stroke: ${(props) => (props.isHovered ? '#3C7D7F' : '#D1BE92')}
    }
    path {
      fill: ${(props) => (props.isHovered ? '#ffffff' : '#000000')}
    }
`;

interface AddButtonProps {
  setIsSelected: Dispatch<SetStateAction<boolean>>;
  isHovered: boolean;
}

function AddButton({ setIsSelected, isHovered }: AddButtonProps): JSX.Element {
  return (
    <StyledIcon isHovered={isHovered}>
      <AddIcon onClick={() => { setIsSelected(true); }} />
    </StyledIcon>
  );
}

export default AddButton;
