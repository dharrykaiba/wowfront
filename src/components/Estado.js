import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { obtenerEstado } from '../services/obtenerEstado'

export default function Estado () {
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
    <div className='card'>
      Status Server
      <div className='card-bpdy'>
        <h3 className='card-title'>{estado.message}</h3>
        <h3 className='card-text'>{estado.ok}</h3>
      </div>
    </div>
  )
}
