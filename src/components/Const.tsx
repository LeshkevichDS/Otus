export const today = new Date();
export const todayDay = today.getDate();
export const todayMonth = today.getMonth()+1;
export const todayYear = today.getFullYear();

export const nextDate = (day: number, month: number, year: number): Date => {
    let nextDay: number;
    let nextMonth: number;
    let nextYear: number;
    if (daysInMonth(month, year) === day) {nextDay = 1} else {nextDay = day+1};
    if (month === 12 && daysInMonth(month, year) === day) {nextMonth = 1} else if (daysInMonth(month, year) === day) {nextMonth = month+1} else {nextMonth = month};
    if (month === 12 && daysInMonth(month, year) === day) {nextYear = year+1} else {nextYear = year};
    return (dayToDate(nextDay, nextMonth, nextYear))
};

export const prevMonth = (todayMonth: number, defaultMonth: number, todayYear: number, defaultYear: number): number => {
    let month: number;
    if (todayMonth === defaultMonth && todayYear === defaultYear) {month = defaultMonth} else if (todayMonth === 1) {month = 12} else {month = todayMonth-1};
    return (month);
};

export const nextMonth = (todayMonth: number): number => {
    let month: number;
    if (todayMonth === 12) {month = 1} else {month = todayMonth+1};
    return (month);
};

export const prevYear = (todayMonth: number, defaultMonth: number, todayYear: number, defaultYear: number): number => {
    let year: number;
    if (todayMonth === defaultMonth && todayYear === defaultYear) {year = defaultYear} else if (todayMonth === 1) {year = todayYear-1} else {year = todayYear};
    return (year);
};

export const nextYear = (todayMonth: number, todayYear: number): number => {
    let year: number;
    if (todayMonth === 12) {year = todayYear+1} else {year = todayYear};
    return (year);
};

export const numToArray = (num: number): number[] => {
    let arr = [];
    for (let i = 1; i <= num; i++) {arr.push(i)};
    return (arr); 
};

export const daysInMonth = (month: number, year: number): number => {
    let days = new Date(year, month, 0).getDate();
    return (days)
};

export const dayToDate = (day: number, month: number, year: number): Date => {
    let date = new Date(year, month-1, day);
    return (date);
};

export const todayDate = dayToDate(todayDay, todayMonth, todayYear);

export const dateToDayOfWeek = (date: Date):number => {
    let dayOfWeek = date.getDay();
    if (dayOfWeek == 0) { dayOfWeek = 7 };
    return (dayOfWeek);
};

/*export const dayOfWeekToString = (dayOfWeek: number):string => {
    let stringDayOfWeek: string;
    if (dayOfWeek === 1) {stringDayOfWeek = "Понедельник"} else
    if (dayOfWeek === 2) {stringDayOfWeek = "Вторник"} else
    if (dayOfWeek === 3) {stringDayOfWeek = "Среда"} else
    if (dayOfWeek === 4) {stringDayOfWeek = "Четверг"} else
    if (dayOfWeek === 5) {stringDayOfWeek = "Пятница"} else
    if (dayOfWeek === 6) {stringDayOfWeek = "Суббота"} else {stringDayOfWeek = "Воскресенье"};
    return (stringDayOfWeek)
};*/

export const monthToString = (month: number):string => {
    let stringMonth: string;
    if (month === 1) {stringMonth = "ЯНВАРЬ"} else
    if (month === 2) {stringMonth = "ФЕВРАЛЬ"} else
    if (month === 3) {stringMonth = "МАРТ"} else
    if (month === 4) {stringMonth = "АПРЕЛЬ"} else
    if (month === 5) {stringMonth = "МАЙ"} else
    if (month === 6) {stringMonth = "ИЮНЬ"} else
    if (month === 7) {stringMonth = "ИЮЛЬ"} else
    if (month === 8) {stringMonth = "АВГУСТ"} else
    if (month === 9) {stringMonth = "СЕНТЯБРЬ"} else
    if (month === 10) {stringMonth = "ОКТЯБРЬ"} else
    if (month === 11) {stringMonth = "НОЯБРЬ"} else {stringMonth = "ДЕКАБРЬ"};
    return (stringMonth)
};

export const dayOfWeekToPrice = (day: number): number => {
    let price: number;
    if (day === 7 || day === 6) {price = 30} else {price = 10}
    return (price)
};

/*export const fullDate = (date): string => {
    let oMonth:string;
    if (date.getMonth()+1 < 10) {oMonth = `0${date.getMonth()+1}`} else {oMonth = `${date.getMonth()+1}`};
    let oDay:string;
    if (date.getDate() < 10) {oDay = `0${date.getDate()}`} else {oDay = `${date.getDate()}`};
    let fullDate: string = `${date.getFullYear()}-${oMonth}-${oDay}`;
    return (fullDate)
};*/

export const getDates = (startDate: Date, endDate: Date): Date[] => {
    Date.prototype.addDays = function(days: number): Date {
        let date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    };
    let dateArray = new Array();
    let currentDate = startDate;
    while (currentDate <= endDate) {
        dateArray.push(new Date (currentDate));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
};

export const calcPrice = (arrDates: Date[], date2: Date): number => {
    let sum = 0 - dayOfWeekToPrice(dateToDayOfWeek(date2));
    arrDates.map(function(date) {
        sum = sum + dayOfWeekToPrice(dateToDayOfWeek(date));
        return(sum)
    });
    return(sum)
};