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
        let status;
        if (dayToDate(day, month, year) < todayDate) {status = "off"} else
        if (dayToDate(day, month, year) === startDate || dayToDate(day, month, year) === endDate) {status = "selected"} else {status = ""}
        bookedDates.map(function(object) {
            if (dayToDate(day, month, year) >= object.start && dayToDate(day, month, year) < object.end) {status = object.name}
        });
        console.log(status);
        return (
            <Cell key={day} onClick={() => updateDate(day, month, year)} status={status} day={day} dayOfWeek={dateToDayOfWeek(dayToDate(day, month, year))} />
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