import { Avatar } from '@material-ui/core';
import { ChatOutlined, Send, SendOutlined, Share, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React from 'react';
import './Post.css';
import OpcionInput from './OpcionInput';

const Post = ({ nombre, descripcion, mensaje, fotoUrl }) => {
    return (
        <div className='post'>
            <div className="post__encabezado">
                <Avatar />
                <div className="post__info">
                    <h2>{nombre}</h2>
                    <p>{descripcion}</p>
                </div>
            </div>
            <div className="post__cuerpo">
                <p>{mensaje}</p>
            </div>
            <div className="post__botones">
                <OpcionInput Icon={ThumbUpAltOutlined}
                titulo='Me Gusta' color="gray" />
                <OpcionInput Icon={ChatOutlined}
                titulo='Comentar' color="gray" />
                <OpcionInput Icon={ShareOutlined}
                titulo='Compartir' color="gray" />
                <OpcionInput Icon={SendOutlined}
                titulo='Enviar' color="gray" />
            </div>
        </div>
    );
}

export default Post;
