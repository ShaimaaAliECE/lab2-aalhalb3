import React from 'react';
import Circle from './Circle';
import './index.css';

const Board = ({circleBut, onClick}) => {
    return (
        //use the boardStyle class from the index.css file
        <div className = "boardStyle">
            {circleBut.map((circle,i) => {
                return <Circle key = {i} value = {circle} onClick = {() => onClick (i)} />
            }) /* call the circle React function and create as many circle buttons as "i" specifies using map. Each button is unique */}
        </div>
    );
}

export default Board;