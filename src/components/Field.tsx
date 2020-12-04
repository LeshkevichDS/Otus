import React from "react";
import { Cell } from "./Cell"

const arrNum = (num: number): number[] => {
    let arr = [];
    for (let i = 1; i <= num; i++) {arr.push(i)};
    return (arr); 
};

const fieldStyle = (x: number, y: number) => {
    return {
        display: "grid",
        justifyContent: "start",
        gridTemplateColumns: "auto ".repeat(x),
        gridTemplateRows: "auto ".repeat(y),
    }
}

interface FieldProps {
    x: number;
    y: number;
}

export const Field: React.FC<FieldProps> = ({x, y}) => {
    const Cells = arrNum(y).map(function(itemY) {
        return (
            arrNum(x).map(function(itemX) {
                return (
                    <Cell key={`${itemX}_${itemY}`} x={itemX} y={itemY} />
                )
            })
        )
    })
    return (
        <div style={fieldStyle(x, y)}>
            {Cells}
        </div>
    );
};