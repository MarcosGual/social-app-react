import React from 'react';
import "./OpcionInput.css";

const OpcionInput = ({ titulo, Icon, color }) => {
    return (
        <div className='opcionInput'>
            <Icon style={{ color: color }} />
            <h4>{titulo}</h4>
        </div>
    );
}

export default OpcionInput;
