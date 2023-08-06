import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { updateTodo } from "../../store/todoSlice";
import { useDispatch } from "react-redux";

function EditModal(props) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const existingUser = props.users.filter((f) => f.id == props.userId);
  const { name, desc } = existingUser[0];

  const [uName, setUname] = useState(name);
  const [uDesc, setUdesc] = useState(desc);

  const handleUpdate = (e) => {
    e.preventDefault;
    dispatch(
      updateTodo({
        name: uName,
        id: props.userId,
        desc: uDesc,
      })
    );
  };
  return (
    <>
      <button className="btn btn-sm btn-primary" onClick={handleShow}>
        Edit
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="editModal" onSubmit={handleUpdate}>
            <h3 style={{ marginBottom: "1.5rem", textAlign: "center" }}>
              Update User
            </h3>
            <div className="mb-3 d-flex form ">
              <input
                type="text"
                className="form-control"
                placeholder="Todo Name"
                onChange={(e) => setUname(e.target.value)}
                value={uName}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Description"
                onChange={(e) => setUdesc(e.target.value)}
                value={uDesc}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button className="btn btn-sm btn-primary" form="editModal">
            {" "}
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
