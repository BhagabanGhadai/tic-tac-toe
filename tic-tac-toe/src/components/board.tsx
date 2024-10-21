import React, { useState } from "react";
import Square from "./square";
const Board: React.FC = () => {
    const [currentTurn, setCurrentTurn] = useState("X")
    const [history, setHistory] = useState(Array(9).fill(null))
    const handleClick = (i: number) => {
        const squares = [...history]
        const win=checkWinner()
        if(win){
            alert(`${win} won the game`)
            setHistory(Array(9).fill(null))
            setCurrentTurn("X")
            return
        }
        if (squares[i]) return
        squares[i]=currentTurn
        setCurrentTurn(currentTurn==="X"?"O":"X")
        setHistory(squares)
    }

    //check if someOne Won
    const checkWinner=()=>{
        const winner=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let i=0;i<winner.length;i++){
            const [a,b,c]=winner[i]
            if(history[a] && history[a]===history[b] && history[a]===history[c]){
                return history[a]
            }
        }
    }
    return (
        <div className="board">
            <div className="row">
                <Square onClick={() => handleClick(0)} value={history[0]} />
                <Square onClick={() => handleClick(1)} value={history[1]} />
                <Square onClick={() => handleClick(2)} value={history[2]} />
            </div>
            <div className="row">
                <Square onClick={() => handleClick(3)} value={history[3]} />
                <Square onClick={() => handleClick(4)} value={history[4]} />
                <Square onClick={() => handleClick(5)} value={history[5]} />
            </div>
            <div className="row">
                <Square onClick={() => handleClick(6)} value={history[6]} />
                <Square onClick={() => handleClick(7)} value={history[7]} />
                <Square onClick={() => handleClick(8)} value={history[8]} />    
            </div>
        </div>
    )
}

export default Board