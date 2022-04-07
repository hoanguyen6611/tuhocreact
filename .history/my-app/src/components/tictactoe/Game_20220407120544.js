import React, { useState } from 'react';
import { calculateWinner } from '../../helpers';
import Board from './Board';
import './GameStyles.css'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const handleClick = (index) =>{
        const boardCopy = 
    };
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);
    return (
        <div>
        <Board cells={board} onClick={handleClick}></Board>
        </div>
    );
};

export default Game;