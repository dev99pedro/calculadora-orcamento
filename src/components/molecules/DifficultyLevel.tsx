import styled from 'styled-components';
import Tooltip from './Tooltip';

interface DifficultyProps {
  type: string;
  estimate: number | string;
  $color: string;
  modules: number;
}

const StyledDifficulty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const StyledHeader = styled.span``;

const StyledType = styled.span`
  color: #111;
  font-size: 14px;
  font-weight: 700;
`;

const StyledEstimate = styled.span`
  color: #515151;
  font-size: 14px;
  font-weight: 400;
`;

const StyledHours = styled.span<{ $color: string }>`
  color: ${({ $color }) => $color};
  font-weight: 700;
`;

const StyledModules = styled.span`
  padding: 2px 4px;
  background: #EBEBEB;
  border-radius: 4px;
  color: #515151;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  gap: 4px;
`;

const StyledQuantity = styled.span`
  font-weight: 700;
`;

const getModule = (count: number): string => (count === 1 ? 'módulo' : 'módulos');

function Difficulty(
  {
    type,
    estimate,
    $color,
    modules,
  }: DifficultyProps,
): JSX.Element {
  return (
    <StyledDifficulty>
      <StyledHeader>
        <StyledType>{ type }</StyledType>
      </StyledHeader>
      <StyledEstimate>
        <StyledHours $color={$color}>
          { estimate }
          h
        </StyledHours>
        /módulo
      </StyledEstimate>
      <StyledModules>
        <StyledQuantity>{ modules }</StyledQuantity>
        { getModule(modules) }
      </StyledModules>
    </StyledDifficulty>
  );
}

export default Difficulty;

// Difficulty
