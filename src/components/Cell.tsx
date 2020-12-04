import React from "react";

const cellStyle = {
    width: "35px",
    height: "35px",
    border: "1px solid",
}

interface CellProps {
    x: number;
    y: number;
}

export const Cell: React.FC<CellProps> = ({x, y}) => {
    return (
        <div onClick={() => console.log(`По ячейке ${`x${x},y${y}`} кликнули`)} style={cellStyle}>{`x${x}y${y}`}</div>
    )
}