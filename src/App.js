import './App.css'
import * as React from 'react'
import Rutas from './routes'
import { BrowserRouter} from 'react-router-dom'
import Navigation from './components/Navigation'

function App () {
  return (
    <BrowserRouter>
    <Navigation />
      <Rutas></Rutas>
    </BrowserRouter>
  )
}

export default App
