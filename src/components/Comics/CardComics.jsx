const CardComics = ({ comic }) => {

  return (
    <div className="card">
      <h2>{comic.title}</h2>
      <img src={`${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`} alt={comic.title} />
      <p>{comic.description}</p>
    </div>
  );
};

export default CardComics;


/*
const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
return (
  <div>
    <div className="card" key={comic.id}>
          <h2>{comic.title}</h2>
          <img
            src={`${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`}
            alt={comic.title}
          />
          <p>{comic.description}</p>
          {comic.description && (
            <>
              <button
                onClick={toggleDescription}
                className={showDescription ? 'active' : ''}
              >
                {showDescription ? 'Leer menos' : 'Leer más'}
              </button>
              {showDescription && <p>{comic.description}</p>}
            </>
          )}
        </div>
  </div>
);*/
