const ModalComic = ({ comic }) => {
  return (
    <div className="modal">
      {comic.description && <p className="description">{comic.description}</p>}
    </div>
  );
};

export default ModalComic;
