import React from "react";
import { dayOfWeekToPrice } from "./Const";
import { cellStyle, dayStyle, priceStyle } from "./Style";

interface CellProps {
    onClick: any,
    status: any,
    bookedStart: any,
    day: number,
    dayOfWeek: number,
};

export const Cell: React.FC<CellProps> = ({onClick, status, bookedStart, day, dayOfWeek}) => {
    const cellStatus = () => {
        if (status === "" || status === "off" || status === "selected" || status === "start" || status === "end") {return(`${dayOfWeekToPrice(dayOfWeek)}р`)} else {return(status)}
    };
    return (
        <div onClick={onClick} style={cellStyle(status, bookedStart, day, dayOfWeek)}><p style={dayStyle(status)}>{day}</p><p style={priceStyle(status)}>{cellStatus()}</p></div>
    )
};