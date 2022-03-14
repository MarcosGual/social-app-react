import { Avatar } from '@material-ui/core'
import React from 'react'
import './BarraLateral.css'

export default function BarraLateral() {

    const itemReciente = (topic) => ( //no siempre hace falta tener un componente, podemos tener una función que haga el renderizado
        <div className="barralateral__itemReciente">
            <span className="barralateral__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='barralateral'>
            <div className='barralateral__arriba'>
                <img src='https://photy.org/photos/blue-slide-background-wide.jpg' alt='' />
                <Avatar className='barralateral_avatar' />
                <h2>Marcos Gual</h2>
                <h4>marcos.gual@outlook.com</h4>
            </div>

            <div className="barralateral__stats">
                <div className="barralateral__stat">
                    <p>Quién te vio</p>
                    <p className="barralateral__numero">156</p>
                </div>
                <div className="barralateral__stat">
                    <p>Vistas del post</p>
                    <p className="barralateral__numero">93</p>
                </div>
            </div>

            <div className="barralateral__abajo">
                <p>Reciente</p>
                {itemReciente('react')}
                {itemReciente('react')}
                {itemReciente('react')}
                {itemReciente('react')}
                {itemReciente('react')}
            </div>
        </div>
    );
}
