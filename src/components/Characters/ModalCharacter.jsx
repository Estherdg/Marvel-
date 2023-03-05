const ModalCharacter = ({ character }) => {
  return (
    <div className="modal">
      {character.description && (
        <p className="description">{character.description}</p>
      )}
    </div>
  );
};

export default ModalCharacter;
