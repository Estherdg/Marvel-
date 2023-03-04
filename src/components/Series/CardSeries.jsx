const CardSeries = ({ serie }) => {

  return (
    <div className="cardS">
      <h2 className="sTitle">{serie.title}</h2>
      <img
      className="serImg"
      src={`${serie.thumbnail.path}/portrait_fantastic.${serie.thumbnail.extension}`}
      alt={serie.title}
      />
      <p className="description">{serie.description}</p>
    </div>
  );
};

export default CardSeries;
