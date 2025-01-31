import styled from 'styled-components';
import difficultyLevels from '../../sharedData/DifficultyLevelsData';
import DifficultyLevel from '../molecules/DifficultyLevel';

const StyledHeading = styled.h4`
  color: #111;
  font-size: 12px;
  font-weight: 400;
  padding: 0;
  margin: 0;
  padding-bottom: 4px;
`;

const StyledDifficultyLevels = styled.div`
  display: flex;
  gap: 40px;
`;

function DifficultyLevels(): JSX.Element {
  return (
    <>
      <StyledHeading>
        Complexidade:
      </StyledHeading>
      <StyledDifficultyLevels>
        {difficultyLevels.map(
          ({
            type,
            estimate,
            color,
            modules,
          }) => (
            <DifficultyLevel
              key={type}
              type={type}
              estimate={estimate}
              $color={color}
              modules={modules}
            />
          ),
        )}
      </StyledDifficultyLevels>
    </>
  );
}

export default DifficultyLevels;

// DifficultyLevels
