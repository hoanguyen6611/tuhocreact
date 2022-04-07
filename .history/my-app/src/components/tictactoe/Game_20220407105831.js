import React from 'react';
import Board from './Board';
import './GameStyles.css'

const Game = () => {
    const [board, setBoard] = useState(Array(9))
    return (
        <div>
        <Board></Board>
        </div>
    );
};

export default Game;