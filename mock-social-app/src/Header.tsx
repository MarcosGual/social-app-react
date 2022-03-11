import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons';

function Header() {
  return (
    <div className='header'>
        <h1>Esta es la cabecera</h1>

        <div className="header__izq">
            <img src="" alt="" />

            <div className="header__busqueda">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>

        <div className="header__der">

        </div>
    </div>
  )
}

export default Header