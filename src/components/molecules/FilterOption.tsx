import styled from 'styled-components';
import { ReactComponent as Checked } from '../../assets/svgs/checked.svg';
import { ReactComponent as Unchecked } from '../../assets/svgs/unchecked.svg';

const StyledOption = styled.div`
  display: flex;
  gap: 8px;
  user-select: none;
  max-width: 140px;
  align-items: center;
  cursor: pointer;
  svg{
    cursor: pointer;
    min-width: 16px;
  }
`;

interface FilterOptionProps {
  option: string;
  callback: () => void;
  filters: string[];
}

function FilterOption({
  option,
  callback,
  filters,
}: FilterOptionProps): JSX.Element {
  return (
    <StyledOption
      onClick={() => {
        callback();
      }}
    >
      {
        filters.some((filter) => filter === option) ? (
          <Checked onClick={() => {
            callback();
          }}
          />
        ) : (
          <Unchecked onClick={() => {
            callback();
          }}
          />
        )
      }
      {option}
    </StyledOption>
  );
}

export default FilterOption;
