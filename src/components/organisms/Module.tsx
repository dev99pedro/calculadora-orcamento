import styled from 'styled-components';
import Complexity from '../molecules/Complexity';
import ModuleTitle from '../atoms/ModuleTitle';
import ModuleDescription from '../atoms/ModuleDescription';
import ModuleImage from '../atoms/ModuleImage';
import IModule from '../../interfaces/IModule';
import ModulesInfos from '../atoms/ModuleInfos';
import Seal from '../molecules/Seal';
import SealContainer from '../atoms/SealContainer';

const StyledModule = styled.div`
  display: flex;
  width: 720px;
  min-height: 200px;
  border-radius: 10px;
  border: 1px solid #D0D0D0;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0px;
`;

function Module({ module }: { module: IModule }): JSX.Element {
  return (
    <StyledModule>
      <ModuleImage src={module.image} />
      <ModulesInfos>
        <Complexity name={module.name} level={module.complexity} />
        <ModuleTitle title={module.name} />
        <ModuleDescription description={module.description} />
        <SealContainer>
          {Array.isArray(module.seals) && module.seals.map((seal) => (
            seal ? (
              <Seal
                color={seal.color}
                text={seal.text}
                Icon={seal.Icon}
              />
            ) : null
          ))}
        </SealContainer>
      </ModulesInfos>
    </StyledModule>
  );
}

export default Module;
