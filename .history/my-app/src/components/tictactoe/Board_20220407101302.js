import React from 'react';
import Cell from './Cell';

const Board = () => {
    return (
        <div className="game-board">
            {Array(9).fill().map((item))}
        </div>
    );
};

export default Board;