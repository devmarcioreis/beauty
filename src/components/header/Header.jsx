import React from 'react'
import './Header.module.css'

const Header = () => {
  return (
    <div className={CSS.container}>
      <div className={CSS.logo}>
        Logo
      </div>
      <div className={CSS.right}>
        <div className={CSS.menu}>

        </div>
        <input type="text" className={CSS.search} />
        <span>Icone</span>
      </div>
    </div>
  )
}

export default Header