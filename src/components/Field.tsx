import React from "react";
import { Cell } from "./Cell"

interface FieldProps {
    x: number;
    y: number;
}

function arrNum(num: number): number[] {
    let arr = [];
    for (let i = 1; i <= num; i++) {arr.push(i)};
    return (arr); 
};

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
        <div style={{ display: "grid", justifyContent: "start", gridTemplateColumns: `${"auto ".repeat(x)}`, gridTemplateRows: `${"auto ".repeat(y)}` }}>
            {Cells}
        </div>
    );
};