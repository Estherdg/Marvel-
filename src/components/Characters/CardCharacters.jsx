const CardCharacters = ({ character }) => {

  return (
    <div className="card">
      <h2>{character.name}</h2>
      <img src={`${character.thumbnail.path}/portrait_fantastic.${character.thumbnail.extension}`} alt={character.title} />
      <p>{character.description}</p>
    </div>
  );
};

export default CardCharacters;
