import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeView from './views/HomeView'

function Rutas () {
  return (
    <Routes>
      <Route index path='/' element={<HomeView />} />
    </Routes>
  )
}
export default Rutas
