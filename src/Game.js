import React, {useState} from 'react';
import Board from './Board';

const Winner = (buttons) => {
    //List of all possible winning patterns in the game
    const winningPatterns =[
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15],
        [0,4,8,12],
        [1,5,9,13],
        [2,6,10,14],
        [3,7,11,15]
    ];

    //checks if the values (a,b,c,d) are the same as one another, which will then determine the winner
    for (let i = 0; i < winningPatterns.length; i++){
        const [a,b,c,d] = winningPatterns[i];
        if (buttons[a] && buttons[a] === buttons [b] && buttons[a] === buttons [c] && buttons[a] === buttons[d]){
            return buttons[a];
        }
    }
    return null;
}

const Game = () => {
    const [board, setBoard] = useState(Array(16).fill(null));
    const [firstPlayer, setFirstPlayer] = useState(true);
    const winner = Winner(board);

    const clickHandler = (i) => {
        //duplicates the original game board
        const newBoard = [...board];

        if (winner || newBoard[i]) return;

        //if it's the first player's turn, then they are red, else (2nd player), they are yellow
        if (firstPlayer){
            newBoard[i] = 'RED';
        }else{
            newBoard[i] = 'YELLOW';
        }

        //sets the original board state to the new board
        setBoard(newBoard);
        setFirstPlayer(!firstPlayer);
    }

    return (
        //returns the Board react function and assigns the 2 parameters (clickBut and onClick) board and clickHandler respectively
        <>
            <Board circleBut = {board} onClick = {clickHandler} />

            <div className = 'winnerText'>
                <p>
                    {//conditional statement checking if winner is true then change the text value to winner. Else, keep showing which player's turn it is.
                        winner ? 'Winner: ' + winner : 'Next Player: ' + (firstPlayer ? 'RED' : 'YELLOW')
                    }
                </p>
            </div>
            
        </>
    );
}

export default Game;