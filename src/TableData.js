import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import AddModal from "./Modal/AddModal";
import axios from "axios";

// const BaseURL = process.env.REACT_APP_BASE_URL;
const BaseURL = "https://64916af42f2c7ee6c2c82c6b.mockapi.io/api/v1/users";

const TableData = () => {
  const [tableData, setTableData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get(BaseURL).then((response) => {
      console.log(response.data, "response");
      setTableData(response.data);
    });
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <Button
        className="addUserButton"
        variant="primary"
        onClick={() => setShowModal(true)}
      >
        Add User
      </Button>
      <AddModal show={showModal} onHide={() => setShowModal(false)} />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Avatar</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>
                  <img src={val.avatar} alt="Avatar" />
                </td>
                <td>{val.createdAt}</td>
                <td>
                  <Button variant="primary">Update</Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableData;
