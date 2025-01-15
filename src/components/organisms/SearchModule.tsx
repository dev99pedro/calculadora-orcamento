import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import IModule from '../../interfaces/IModule';

interface SearchModuleProps {
  modulesData: IModule[],
  setFilteredModules: Dispatch<SetStateAction<IModule[]>>
}

function SearchModule({ modulesData, setFilteredModules } : SearchModuleProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredModules(modulesData.filter((module) => module.name
      .toLowerCase().includes(searchTerm.toLowerCase())));
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Encontre um módulo"
        value={searchTerm}
        onChange={(therme) => setSearchTerm(therme.target.value)}
      />
    </div>
  );
}

export default SearchModule;
