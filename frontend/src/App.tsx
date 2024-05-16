import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'

export default function App():React.ReactElement {
  return (
    <Routes>
      <Route path='/' element={<Outlet/>}>
        <Route index element={<HomePage/>} />
      </Route>
    </Routes>
  )
}
