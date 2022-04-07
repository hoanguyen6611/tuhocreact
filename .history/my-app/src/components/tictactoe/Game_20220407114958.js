import React, { useState } from 'react';
import Board from './Board';
import './GameStyles.css'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const handleClick = () =>{};
    const [x]
    return (
        <div>
        <Board cells={board} onClick={handleClick}></Board>
        </div>
    );
};

export default Game;