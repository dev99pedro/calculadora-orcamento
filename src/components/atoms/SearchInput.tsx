import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

const StyledSearch = styled.input`
  width: 250px;
  height: 44px;
  border: none;
  border-radius: 8px;
  background-color: #ffffff;
  padding-left: calc(12px + 20px + 8px);
  font-size: 14px;
  &:focus,
  &:focus-visible{
    outline: 1px solid #5D7EF3;
  }
  &::placeholder{
    color: #888888;
  }
`;

interface SearchInputProps {
  term: string;
  setTerm: Dispatch<SetStateAction<string>>;
}

function SearchInput({ term, setTerm }: SearchInputProps): JSX.Element {
  return (
    <StyledSearch
      type="text"
      placeholder="Encontre um módulo"
      value={term}
      onChange={(therme) => setTerm(therme.target.value)}
    />
  );
}

export default SearchInput;
