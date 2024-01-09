import React from 'react'
import AdminLayout from '../../components/layouts/AdminLayout'
import ClientSignupForm from '../../components/clients/ClientSignupForm'

function ClientSignUp() {
  return (
    <>
        <AdminLayout title={"Client"}>
            <ClientSignupForm/>
        </AdminLayout>
    </>
  )
}

export default ClientSignUp