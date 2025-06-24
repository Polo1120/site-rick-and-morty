// useFetchCharacters.ts
import { useState, useEffect } from "react";
import { getCharacters } from "rickmortyapi";
import { Character } from "../utils/type"; 

const useFetchCharacters = (query: string) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoadingState(true);
        
        const { data } = await getCharacters(query ? { name: query } : {}); 
        setCharacters(data.results || []);
      } catch (error) {
        setError("Error al obtener personajes");
      } finally {
        setLoadingState(false);
      }
    };

    fetchCharacters();
  }, [query]);

  return { characters, error, loadingState };
};

export default useFetchCharacters;
