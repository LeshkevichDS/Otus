import React from "react";
import { dayOfWeekToPrice } from "./Const";
import { otherCellStyle, selectedOtherCellStyle, firstCellStyle, selectedFirstCellStyle, dayStyle, dayOffStyle, priceStyle, priceOffStyle, priceBookedStyle } from "./Style";

interface CellProps {
    onClick: any,
    status: any,
    day: number,
    dayOfWeek: number,
};

export const Cell: React.FC<CellProps> = ({onClick, status, day, dayOfWeek}) => {
    const cellStyle = () => {
        if (day === 1 && status === "selected") {return selectedFirstCellStyle(dayOfWeek)} else
        if (day === 1) {return firstCellStyle(dayOfWeek)} else
        if (status === "selected") {return selectedOtherCellStyle} else {return otherCellStyle}
    };
    const dayStatus = () => {
        if (status === "" || status === "selected") {return dayStyle} else {return dayOffStyle}
    };
    const priceStatus = () => {
        if (status === "off") {return priceOffStyle} else
        if (status === "" || status === "selected") {return priceStyle} else {return priceBookedStyle}
    };
    const cellStatus = () => {
        if (status === "" || status === "off") {return(`${dayOfWeekToPrice(dayOfWeek)}р`)} else {return(status)}
    };
    return (
        <div onClick={onClick} style={cellStyle()}><p style={dayStatus()}>{day}</p><p style={priceStatus()}>{cellStatus()}</p></div>
    )
};