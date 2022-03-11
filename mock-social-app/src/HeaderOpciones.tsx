import { Avatar } from '@material-ui/core';
import React from 'react'
import './HeaderOpciones.css'

type HeaderOpcionesProps = {
    avatar?: string;
    Icon?: any;
    title?: string;
}

const HeaderOpciones: React.FC<HeaderOpcionesProps> = ({ avatar, Icon, title }) => {
    return (
        <div className='headerOpcion'>
            {Icon && <Icon ClassName='headerOpcion__icon' />}
            {avatar && <Avatar className='headerOpcion__icon' src={avatar} />}
            <h3 className='headerOpcion__titulo'>{title}</h3>
        </div>
    )
}

export default HeaderOpciones