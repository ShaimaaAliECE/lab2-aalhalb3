import React, {useState} from 'react';
import './index.css';

const Circle = ({value, onClick}) => {
    return (
        //creates a button with the given css className and stores a value (RED or YELLOW) into it
        <button className = "button" onClick = {onClick}>
            {
                value
            }
        </button>
    );
}

export default Circle;