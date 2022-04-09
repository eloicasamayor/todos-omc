import Modal from "react-modal";
export function BigModal({ todo, onTodoDeleted, modalIsOpen, closeModal }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Delete todo modal"
    >
      <h4 className="card-title">Are you sure to delete the todo?</h4>
      <h5 className="card-subtitle">This operation cannot be undone.</h5>
      <hr />
      <p className="text-center blockquote">{todo.title}</p>
      <hr />
      <div className="d-flex justify-content-between">
        <button className="btn btn-danger" onClick={() => onTodoDeleted(todo)}>
          Yes! delete the todo
        </button>
        <button className="btn btn-secondary" onClick={() => closeModal()}>
          cancel
        </button>
      </div>
    </Modal>
  );
}
