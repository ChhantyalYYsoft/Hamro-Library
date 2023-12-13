import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Login from './pages/auth/Login'
import ResetPassword from './pages/auth/ResetPassword'
import AdminSignUp from './pages/auth/AdminSignUp'
import AddBook from './pages/books/AddBook'
import Clients from './pages/clients/Clients'
import Dashboard from './pages/dashboard/Dashboard'
import Books from './pages/books/Books'
import EditBook from './pages/books/EditBook'
import History from './pages/history/History'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  console.log(import.meta.env.API_KEY)

  return (
    <>
      <Routes>
        {/* { we will later update this (/) routes to display homepage} */}
        <Route path='/' element={<Login/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/reset-password' element={<ResetPassword/>}></Route>
        <Route path='/admin-signup' element={<AdminSignUp/>}></Route>
        <Route path='/add-book' element={<AddBook/>}></Route>
        <Route path='/books' element={<Books/>}></Route>
        <Route path='/edit-book' element={<EditBook/>}></Route>
        <Route path='/clients' element={<Clients/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/history' element={<History/>}></Route>

      </Routes>
    </>
  )
}

export default App
