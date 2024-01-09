import React from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import ClientTable from "../../components/clients/ClientTable";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Clients() {
  return (
    <AdminLayout title="Clients">
      <div >
                <Link to="/client-sign-byAdmin" className='d-flex justify-content-end me-3'>
                    <Button>Add a Client</Button>
                </Link>
            </div>
      <ClientTable />
    </AdminLayout>
  );
}

export default Clients;
