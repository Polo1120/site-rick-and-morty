export interface Character {
  id: number;
  name: string;
  image: string;
  gender: string;
  species: string;
  status: string;
  location:{
    name: string;
  }
}

export interface CharactersProps {
  query: string
}



export interface SearchBarProps {
  onSearch: (query: string) => void;
  query: string;
  loading: boolean;
}


export interface HeaderProps extends SearchBarProps {
  
}
