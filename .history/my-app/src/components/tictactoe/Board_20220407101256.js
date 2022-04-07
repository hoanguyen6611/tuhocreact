import React from 'react';
import Cell from './Cell';

const Board = () => {
    return (
        <div className="game-board">
            {Array(9).fill()}
        </div>
    );
};

export default Board;