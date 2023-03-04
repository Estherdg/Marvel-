const CardSeries = ({ serie }) => {

  return (
    <div className="card">
      <h2>{serie.title}</h2>
      <img src={`${serie.thumbnail.path}/portrait_fantastic.${serie.thumbnail.extension}`} alt={serie.title} />
      <p>{serie.description}</p>
    </div>
  );
};

export default CardSeries;
