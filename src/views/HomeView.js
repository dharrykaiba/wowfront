import React, { useState, useEffect } from 'react'
import { obtenerEstado } from '../services/obtenerEstado'

export default function HomeView () {
  const [estado, setEstado] = useState(0)

  const getEstado = async () => {
    let data = await obtenerEstado()
    console.log(data)
    setEstado(data)
  }

  useEffect(() => {
    getEstado()
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='card'>
          Status Server
          <div className='card-bpdy'>
            <h3 className='card-title'>{estado.message}</h3>
            <h3 className='card-text'>{estado.ok}</h3>
          </div>
        </div>
      </header>
    </div>
  )
}
