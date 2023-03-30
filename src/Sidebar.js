import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='bg-white sidebar p-2'>
        <div className='m-2'>
            <i className='bi bi-bar-chart me-3 fs-4'></i>
            <span className='brand-name fs-4'>Faeldev</span>
        </div>
        <hr className='text-dark'/>
        <div className='list-group list-group-flush'>
            <a href='/' className='list-group-item py-2 '>
                <i className='bi bi-speedometer2 fs-5 me-3'></i>
                <span>Dashboard</span>
            </a>

            <a href='/' className='list-group-item py-2 '>
                <i className='bi bi-house fs-4 me-3'></i>
                <span>Inicio</span>
            </a>

            <a href='/' className='list-group-item py-2'>
                <i className='bi bi-table fs-5 me-3'></i>
                <span>Produtos</span>
            </a>

            <a href='/' className='list-group-item py-2'>
                <i className='bi bi-clipboard-data fs-5 me-3'></i>
                <span>Suporte</span>
            </a>

            <a href='/' className='list-group-item py-2'>
                <i className='bi bi-people fs-5 me-3'></i>
                <span>Perfil</span>
            </a>

            <a href='/' className='list-group-item py-2'>
                <i className='bi bi-power fs-5 me-3'></i>
                <span>Sair</span>
            </a>
        </div>
    </div>
  )
}

export default Sidebar