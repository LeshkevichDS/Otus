import React from "react";
import { numToArray, daysInMonth, dateToDayOfWeek, monthToString, dayToDate, todayDate } from "./Const";
import { fieldStyle, monthFieldStyle, headerFieldStyle, dayOfWeekStyle, weekendStyle } from "./Style";
import { Cell } from "./Cell";

interface FieldProps {
    updateDate: any,
    bookedDates: object[],
    month: number,
    year: number,
    startDate: Date,
    endDate: Date,
};

export const Field: React.FC<FieldProps> = ({updateDate, bookedDates, month, year, startDate, endDate}) => {
    const Cells = numToArray(daysInMonth(month, year)).map(function(day) {
        let dateCell: Date = dayToDate(day, month, year);
        let status: string = "";
        let bookedStart: string = "";
        if (dateCell < todayDate) {status = "off"} else
        if (dateCell.toString() === startDate.toString()) {status = "start"} else
        if (dateCell.toString() === endDate.toString()) {status = "end"} else
        if (dateCell > startDate && dateCell < endDate) {status = "selected"};
        bookedDates.map(function(object) {
            if (dateCell.toString() === object.start.toString()) {status = object.name, bookedStart = "-"};
            if (dateCell.toString() === endDate.toString() && dateCell.toString() === object.start.toString()) {status = object.name, bookedStart = "+"};
            if (dateCell >= object.start && dateCell < object.end) {status = object.name};
        });
        return (
            <Cell key={day} onClick={() => updateDate(day, month, year)} status={status} bookedStart={bookedStart} day={day} dayOfWeek={dateToDayOfWeek(dateCell)} />
        )
    });
    return (
        <>
            <h2 style={monthFieldStyle}>{monthToString(month)} {year}</h2>
            <div style={fieldStyle}>
                <div style={headerFieldStyle}><p style={dayOfWeekStyle}>ПН</p></div>
                <div style={headerFieldStyle}><p style={dayOfWeekStyle}>ВТ</p></div>
                <div style={headerFieldStyle}><p style={dayOfWeekStyle}>СР</p></div>
                <div style={headerFieldStyle}><p style={dayOfWeekStyle}>ЧТ</p></div>
                <div style={headerFieldStyle}><p style={dayOfWeekStyle}>ПТ</p></div>
                <div style={headerFieldStyle}><p style={weekendStyle}>СБ</p></div>
                <div style={headerFieldStyle}><p style={weekendStyle}>ВС</p></div>
                {Cells}
            </div>
        </>
    )
};