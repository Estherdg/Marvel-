import { useState } from "react";
import ModalCharacter from "./ModalCharacter.jsx";

const CardCharacters = ({ character }) => {
  const [showInfo, setShowInfo] = useState(false);

  const showDetail = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="cardCH">
      <h2 className="charName">{character.name}</h2>
      <img
        className="charImg"
        src={`${character.thumbnail.path}/portrait_fantastic.${character.thumbnail.extension}`}
        alt={character.title}
      />
      {character.description && (
        <>
          <button onClick={showDetail} className={showInfo}>
            {showInfo ? "Leer menos" : "Leer más"}
          </button>
          {showInfo && (
            <ModalCharacter key={character.id} character={character} />
          )}
        </>
      )}
    </div>
  );
};

export default CardCharacters;
