// Characters.tsx
import React from "react";
import useFetchCharacters from "./useFetchCharacters"; // Importamos el hook personalizado
import { CharactersProps } from "../utils/type";

const Characters: React.FC<CharactersProps> = ({ query }) => {
  const { characters, error, loadingState } = useFetchCharacters(query);

  return (
    <div className="container">
      {loadingState && <p>Cargando...</p>} {error && <p>{error}</p>}{" "}
      <div className="characters">
        {characters.length > 0
          ? characters.map((item) => (
              <div key={item.id} className="section-character">
                <div className="image-personaje">
                <img src={item.image} alt={item.name} />
                </div>
                <div className="info-personaje">
                  <h2 className="name-character">{item.name}</h2>
                  <p>
                    Género: <span>{item.gender}</span>
                  </p>
                  <p>
                    Especie: <span>{item.species}</span>
                  </p>
                  <p>
                    Location: <span>{item.location.name}</span>
                  </p>
                  <p>
                    <span className={item.status.toLowerCase()}>
                      {item.status}
                    </span>
                  </p>
                </div>
              </div>
            ))
          : !loadingState && <p>No se encontraron personajes.</p>}
      </div>
    </div>
  );
};

export default Characters;
