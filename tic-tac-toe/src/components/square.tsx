import React from "react"

interface SquareProps {
    value?: string|null,
    onClick: () => void
}
const Square:React.FC<SquareProps> = (props) => {
    return (
        <div onClick={() => props.onClick()} className="square">{props.value}</div>
    )
}

export default Square