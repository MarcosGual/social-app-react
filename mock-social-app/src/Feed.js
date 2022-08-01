import React from "react";
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image"
import OpcionInput from "./OpcionInput";
import { CalendarViewDay, EventNote, Subscriptions } from "@material-ui/icons";

function Feed() {
    return ( 
        <div className="feed">
            <div className='feed__contenedorInput'>
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">Enviar</button>
                    </form>
                    <div className="feed__opcionesInput">
                        <OpcionInput Icon={ImageIcon} titulo='Foto' color='#70B5F9' />
                        <OpcionInput Icon={Subscriptions} titulo='Video' color='#E7A33E' />
                        <OpcionInput Icon={EventNote} titulo='Evento' color='#C0CBCD' />
                        <OpcionInput Icon={CalendarViewDay} titulo='Escribir artículo' color='#7FC15E' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feed;