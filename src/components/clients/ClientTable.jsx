import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getClientListAction, deleteClientAction } from "../../redux/client/clientAction";

function ClientTable() {
  const dispatch = useDispatch();
  const { clientList } = useSelector((state) => state.client);

  // I need clientlist to render client table
  useEffect(() => {
    dispatch(getClientListAction());
  }, [dispatch]);

  const deleteClient = (id) => {
    if (window.confirm("Do you want to delete?")) {
      dispatch(deleteClientAction(id));
    }
  };

  return (
    <div className="p-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(clientList) &&
            clientList.map((c, i) => {
              return (
                <tr key={c.id}>
                  <td>{i + 1}</td>
                  <td>
                    {c.fName} {c.lName}
                  </td>
                  <td>{c.phone}</td>
                  <td>{c.email}</td>
                  <td>
                    <Button variant="danger" onClick={() => deleteClient(c.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default ClientTable;
