import React from 'react'
import './header.css'
import Logo from '../../assets/logo.png'
import { BsBag } from 'react-icons/bs'

const Header = () => {
  return (
    <div className='container'>
      <div className='logo'>
        <img src={Logo} alt="Logo" />
        <span>Beauty</span>
      </div>
      <div className='right'>
        <div className='menu'>
          <ul className='menu'>
            <li>Coleções</li>
            <li>Marcas</li>
            <li>Lançamentos</li>
            <li>Mais vendidos</li>
          </ul>
        </div>
        <input type="text" className='search' placeholder='buscar...' />
        <BsBag className='cart' />
      </div>
    </div>
  )
}

export default Header