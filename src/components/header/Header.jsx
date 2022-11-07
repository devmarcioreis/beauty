import React from 'react'
import css from './Header.module.css'
import Logo from '../../assets/logo.png'
import { BsBag } from 'react-icons/bs'

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="Logo" />
        <span>Beauty</span>
      </div>
      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Coleções</li>
            <li>Marcas</li>
            <li>Lançamentos</li>
            <li>Mais vendidos</li>
          </ul>
        </div>
        <input type="text" className={css.search} />
        <BsBag className={css.cart} />
      </div>
    </div>
  )
}

export default Header