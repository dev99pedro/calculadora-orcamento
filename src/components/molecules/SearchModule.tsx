import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useMemo,
} from 'react';
import styled from 'styled-components';
import IModule from '../../interfaces/IModule';
import { ReactComponent as SearchIcon } from '../../assets/svgs/search.svg';
import { ReactComponent as CloseIcon } from '../../assets/svgs/close.svg';
import SearchInput from '../atoms/SearchInput';

const StyledSearchContainer = styled.div`
  position: relative;
`;

const StyledSearchIcon = styled.div`
  svg{
    position: absolute;
    left: 12px;
    top: calc(50% - 10px);
    pointer-events: none;
  }
`;

const StyledCloseIcon = styled.div`
  svg{
    position: absolute;
    right: 12px;
    top: calc(50% - 10px);
    cursor: pointer;
  }
`;
interface SearchModuleProps {
  modulesData: IModule[],
  setFilteredModules: Dispatch<SetStateAction<IModule[]>>
}

function SearchModule({ modulesData, setFilteredModules } : SearchModuleProps): JSX.Element {
  const [term, setTerm] = useState('');

  const filteredModules = useMemo(
    () => modulesData
      .filter((module) => module.name.toLowerCase().includes(term.toLowerCase())),
    [term, modulesData],
  );

  useEffect(() => {
    setFilteredModules(filteredModules);
  }, [filteredModules, setFilteredModules]);

  return (
    <StyledSearchContainer>
      <StyledSearchIcon>
        <SearchIcon />
      </StyledSearchIcon>
      <StyledCloseIcon>
        <CloseIcon onClick={() => setTerm('')} />
      </StyledCloseIcon>
      <SearchInput term={term} setTerm={setTerm} />
    </StyledSearchContainer>
  );
}

export default SearchModule;
