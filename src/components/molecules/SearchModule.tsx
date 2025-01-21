import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
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
  setFilteredBySearch: Dispatch<SetStateAction<IModule[]>>
}

function SearchModule({ modulesData, setFilteredBySearch } : SearchModuleProps): JSX.Element {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const filteredModules = modulesData.filter((module) => module
      .name.toLowerCase().includes(term.toLowerCase()));
    setFilteredBySearch(filteredModules);
  }, [setFilteredBySearch, term, modulesData]);

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
