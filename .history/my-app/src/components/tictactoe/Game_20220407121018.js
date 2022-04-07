import React, { useState } from 'react';
import { calculateWinner } from '../../helpers';
import Board from './Board';
import './GameStyles.css'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);
    const handleClick = (index) =>{
        const boardCopy = [...board];
        if(winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    };
    return (
        <div>
        <Board cells={board} onClick={handleClick}></Board>
        {winner ? ''}
        </div>
    );
};

export default Game;