const ModalSerie = ({ serie }) => {
  return (
    <div className="modal">
      {serie.description && <p className="description">{serie.description}</p>}
    </div>
  );
};

export default ModalSerie;
