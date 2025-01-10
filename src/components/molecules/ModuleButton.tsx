import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import AddButton from '../atoms/AddButton';
import DeleteButton from '../atoms/DeleteButton';
import Selected from '../atoms/Selected';
import { Theme } from '../../enums/EThemes';

interface ModuleButtonProps {
  theme: Theme;
  isHovered: boolean;
  setIsSelected: Dispatch<SetStateAction<boolean>>;
}

const StyledModuleButton = styled.div`
  display: flex;
`;

const renderNeutral = (
  isHovered: boolean,
  setIsSelected: Dispatch<SetStateAction<boolean>>,
): JSX.Element => (
  <AddButton isHovered={isHovered} setIsSelected={setIsSelected} />
);

const renderReadyToAdd = (
  isHovered: boolean,
  setIsSelected: Dispatch<SetStateAction<boolean>>,
): JSX.Element => (
  <AddButton isHovered={isHovered} setIsSelected={setIsSelected} />
);

const renderSelected = (): JSX.Element => <Selected />;

const renderDelete = (setIsSelected: Dispatch<SetStateAction<boolean>>): JSX.Element => (
  <DeleteButton deleted={() => setIsSelected(false)} />
);

function ModuleButton({ theme, isHovered, setIsSelected }: ModuleButtonProps): JSX.Element {
  const getButton = {
    neutral: renderNeutral(isHovered, setIsSelected),
    readyToAdd: renderReadyToAdd(isHovered, setIsSelected),
    selected: renderSelected(),
    delete: renderDelete(setIsSelected),
  };

  return (
    <StyledModuleButton>
      {getButton[theme]}
    </StyledModuleButton>
  );
}

export default ModuleButton;
