import { useState } from "react";
import ModalComic from "./ModalComic.jsx";

const CardComics = ({ comic }) => {
  const [showInfo, setShowInfo] = useState(false);

  const showDetail = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="cardCM">
      <h2 className="cTitle">{comic.title}</h2>
      <img
        className="comImg"
        src={`${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`}
        alt={comic.title}
      />
      {comic.description && (
        <>
          <button onClick={showDetail} className={showInfo}>
            {showInfo ? "Leer menos" : "Leer más"}
          </button>
          {showInfo && <ModalComic key={comic.id} comic={comic} />}
        </>
      )}
    </div>
  );
};

export default CardComics;
