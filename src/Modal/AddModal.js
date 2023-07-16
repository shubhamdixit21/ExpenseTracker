import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Modal } from "react-bootstrap";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import axios from "axios";

const BaseURL = "https://64916af42f2c7ee6c2c82c6b.mockapi.io/api/v1/users";

const AddModal = (props) => {
  const [tableData, setTableData] = useState([]);
  const [showModal, setShow] = useState(false);
  const handleClose = () => props.onHide;

  const BaseURL = "https://64916af42f2c7ee6c2c82c6b.mockapi.io/api/v1/users";

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values, { resetForm }) => {
      axios
        .post(BaseURL, values)
        .then(() => axios.get(BaseURL))
        .then((response) => {
          console.log("hello");
          setTableData(response.data);
          handleClose();
        })
        .catch((error) => {
          console.log(error);
        });
      resetForm();
    },
  });
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={formik.handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddModal;
