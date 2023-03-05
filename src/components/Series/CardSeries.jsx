import { useState } from "react";
import ModalSerie from "./ModalSerie.jsx";

const CardSeries = ({ serie }) => {
  const [showInfo, setShowInfo] = useState(false);

  const showDetail = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="cardS">
      <h2 className="sTitle">{serie.title}</h2>
      <img
        className="serImg"
        src={`${serie.thumbnail.path}/portrait_fantastic.${serie.thumbnail.extension}`}
        alt={serie.title}
      />
      {serie.description && (
        <>
          <button onClick={showDetail} className={showInfo}>
            {showInfo ? "Leer menos" : "Leer más"}
          </button>
          {showInfo && <ModalSerie key={serie.id} serie={serie} />}
        </>
      )}
    </div>
  );
};

export default CardSeries;
