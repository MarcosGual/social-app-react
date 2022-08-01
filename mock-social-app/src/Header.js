import React from 'react'
import './Header.css'
import HeaderOpciones from './HeaderOpciones';
//Iconos:
import HomeIcon from '@material-ui/icons/Home'
import { SupervisorAccount } from '@material-ui/icons';
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className='header'>
        <div className="header__izq">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

            <div className="header__busqueda">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>

        <div className="header__der">
            <HeaderOpciones Icon={HomeIcon} title='Inicio' />
            <HeaderOpciones Icon={SupervisorAccount} title='Mi Red' />
            <HeaderOpciones Icon={BusinessCenterIcon} title="Puestos" />
            <HeaderOpciones Icon={ChatIcon} title="Mensajes" />
            <HeaderOpciones Icon={NotificationsIcon} title="Alertas" />
            <HeaderOpciones avatar='https://s36496.pcdn.co/wp-content/uploads/2017/11/9-si-foto-cv.png' title='Yo' />
        </div>
    </div>
  )
}

export default Header