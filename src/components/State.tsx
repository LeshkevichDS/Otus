import React from "react";
import { nextDate, todayMonth, todayYear, prevMonth, nextMonth, prevYear, nextYear, dayToDate, calcPrice, getDates, todayDate, fullDate } from "./Const";
import { twoFieldStyle, bodyStyle, containerStyle, leftArrowStyle, rightArrowStyle, formStyle } from "./Style";
import { Field } from "./Field";
import { Form } from "./Form";

interface StateAppState {
    startDate: any,
    endDate: any,
    month: number,
    year: number,
    price: number,
    dateStatus: object[],
};

export class StateApp extends React.Component<{}, StateAppState> {
    constructor(props) {
        super(props);
        this.state = {
            startDate: "",
            endDate: "",
            month: todayMonth,
            year: todayYear,
            price: 0,
            bookedDates: [],
        };
        this.updateStatus = this.updateStatus.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.clearDate = this.clearDate.bind(this);
        this.incrementMonth = this.incrementMonth.bind(this);
        this.decrementMonth = this.decrementMonth.bind(this);
    };

    updateStatus (name: string) {
        this.setState ({ bookedDates: [...this.state.bookedDates, {name: name, start: this.state.startDate, end: this.state.endDate}] });
        this.clearDate ();
    };

    updateDate (day: number, month: number, year: number) {
        let click: Date = dayToDate(day, month, year);
        let date1;
        let date2;
        if (click < todayDate) {date1 = this.state.startDate, date2 = this.state.endDate} else
        if (this.state.bookedDates.some(e => this.state.startDate === "" && click >= e.start && click < e.end)) {date1 = this.state.startDate, date2 = this.state.endDate} else
        if (this.state.startDate === "") {date1 = click, date2 = nextDate(day, month, year)} else
        if (this.state.bookedDates.some(e => this.state.startDate < e.start && click > e.start)) {date1 = this.state.startDate, date2 = this.state.endDate} else
        if (this.state.bookedDates.some(e => click < this.state.startDate && this.state.startDate.toString() === e.end.toString())) {date1 = this.state.startDate, date2 = this.state.endDate} else
        if (this.state.bookedDates.some(e => click < this.state.startDate && this.state.startDate > e.end && click < e.end)) {date1 = this.state.startDate, date2 = this.state.endDate} else
        if (click < this.state.startDate) {date1 = click, date2 = this.state.endDate} else
        if (click.toString() === this.state.startDate.toString()) {date1 = click, date2 = this.state.endDate}
        else {date1 = this.state.startDate, date2 = click};
        return(this.setState ({ startDate: date1, endDate: date2, price: calcPrice(getDates(date1, date2), date2)}))
    };

    clearDate () {
        this.setState({startDate: "", endDate: "", price: 0})
    };

    incrementMonth() {
        this.setState({ month: nextMonth(this.state.month), year: nextYear(this.state.month, this.state.year) });
    };

    decrementMonth() {
        this.setState({ month: prevMonth(this.state.month, todayMonth, this.state.year, todayYear), year: prevYear(this.state.month, todayMonth, this.state.year, todayYear) });
    };

    render() {
        return (
            <div style={bodyStyle}>
                <div style={containerStyle}>
                    <div style={twoFieldStyle}>
                        <Field updateDate={this.updateDate} bookedDates={this.state.bookedDates} month={this.state.month} year={this.state.year} startDate={this.state.startDate} endDate={this.state.endDate} />
                        <Field updateDate={this.updateDate} bookedDates={this.state.bookedDates} month={nextMonth(this.state.month)} year={nextYear(this.state.month, this.state.year)} startDate={this.state.startDate} endDate={this.state.endDate} />
                    </div>
                    <div style={leftArrowStyle} onClick={this.decrementMonth}>{`<`}</div>
                    <div style={rightArrowStyle} onClick={this.incrementMonth}>{`>`}</div>
                    <button onClick={this.clearDate}>Очистить даты</button>
                    <div style={formStyle}>
                        <Form updateStatus={this.updateStatus} startDate={fullDate(this.state.startDate)} endDate={fullDate(this.state.endDate)} price={this.state.price} />
                    </div>
                </div>
            </div>
        )
    }
};