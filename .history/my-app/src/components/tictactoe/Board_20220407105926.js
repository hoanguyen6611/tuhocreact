import React from 'react';
import Cell from './Cell';

const Board = () => {
    return (
        <div className="game-board">
            {props/ce.map((item, index) =>(
                <Cell key={index}></Cell>
            ))}
        </div>
    );
};

export default Board;