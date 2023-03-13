<<<<<<< HEAD
import React from 'react'
import { useState } from 'react'
import { Carousel } from '../components/Carousel'
import Footer from '../components/Footer'


export const Home = () => {
  
  return (
    <>
    <Carousel> 
    <div>Hola</div>
    <div className="informacion" >
      <h1> 
        Quienes somos
      </h1>
      <h4>Somos una pagina</h4>
      </div> np
    </Carousel>
    <div >
      <h1>Titulo</h1>
    </div>

    <Footer/>
    </>

    

  )

  
=======
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

import '../styles/home.css'

export const Home = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className='welcome d-flex justify-content-center align-items-center flex-column gap-5'>
      <h1 className='fw-bold text-white bg-info' style={{ fontSize: '3.5rem' }}>
        El cuidado del planeta a solo un click
      </h1>
      {!user ? (
        <Link className='btn btn-warning fw-bold' to='/login'>
          Empieza a cuidar
        </Link>
      ) : user.role === 'admin' ? (
        <Link className='btn btn-warning fw-bold' to='/registro-hc'>
          Registros de HC
        </Link>
      ) : (
        <Link className='btn btn-warning fw-bold' to='/hecho-contaminacion'>
          Hechos de contaminación
        </Link>
      )}
    </div>
  )
>>>>>>> d68c9f1bbea85a949e299f854737a3ece8c502cf
}
