//import { useState } from "react";

const CardCharacters = ({ character }) => {

  return (
    <div className="cardCH">
      <h2 className="charName">{character.name}</h2>
      <img
        className="charImg"
        src={`${character.thumbnail.path}/portrait_fantastic.${character.thumbnail.extension}`}
        alt={character.title}/>
      <p className="description">{character.description}</p>
    </div>
  );
};

export default CardCharacters;

/*

const [isInfo, setIsInfo] = useState(false);

  const handleInfo = () => {
    setIsInfo(!isInfo);
  };

{character.description && (
        <>
          <button onClick={handleInfo} className={setIsInfo ? "active" : ""}>
            {setIsInfo ? "Leer menos" : "Leer más"}
          </button>
          {setIsInfo &&
        </>
      )}

 <button onClick={() => setModalIsOpen(true)}>Abrir ventana modal</button>

 <ReactModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
  <h2>Título de la ventana modal</h2>
  <p>Contenido de la ventana modal</p>
  <button onClick={() => setModalIsOpen(false)}>Cerrar</button>
</ReactModal>

<p className="description">{character.description}</p>
      <button onClick={handleInfo}>
        {isInfo ? "Cerrar Info" : "Abrir Info"}
      </button>
*/
