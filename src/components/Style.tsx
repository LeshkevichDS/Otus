export const firstCellStyle = (dayOfWeek: number) => {
    return {
        width: "75px",
        height: "75px",
        cursor: "pointer",
        gridColumn: dayOfWeek,
    } 
};

export const offFirstCellStyle = (dayOfWeek: number) => {
    return {
        width: "75px",
        height: "75px",
        gridColumn: dayOfWeek,
    } 
};

export const startFirstCellStyle = (dayOfWeek: number) => {
    return {
        width: "71px",
        height: "71px",
        border: "2px solid #0C73FE",
        borderRadius: "40px",
        cursor: "pointer",
        background: "#EAF5FF",
        gridColumn: dayOfWeek,
    } 
};

export const endFirstCellStyle = (dayOfWeek: number) => {
    return {
        width: "71px",
        height: "71px",
        border: "2px solid #0C73FE",
        borderRadius: "40px",
        cursor: "pointer",
        gridColumn: dayOfWeek,
    } 
};

export const selectedFirstCellStyle = (dayOfWeek: number) => {
    return {
        width: "75px",
        height: "75px",
        borderRadius: "40px",
        cursor: "pointer",
        background: "#EAF5FF",
        gridColumn: dayOfWeek,
    } 
};

export const otherCellStyle = {
    width: "75px",
    height: "75px",
    cursor: "pointer",
};

export const offOtherCellStyle = {
    width: "75px",
    height: "75px",
};

export const startOtherCellStyle = {
    width: "71px",
    height: "71px",
    border: "2px solid #0C73FE",
    borderRadius: "40px",
    cursor: "pointer",
    background: "#EAF5FF",
};

export const endOtherCellStyle = {
    width: "71px",
    height: "71px",
    border: "2px solid #0C73FE",
    borderRadius: "40px",
    cursor: "pointer",
};

export const selectedOtherCellStyle = {
    width: "75px",
    height: "75px",
    borderRadius: "40px",
    cursor: "pointer",
    background: "#EAF5FF",
};

export const cellStyle = (status: string, bookedStart: string, day: number, dayOfWeek: number) => {
    if (day === 1 && status === "") {return firstCellStyle(dayOfWeek)} else
    if (day === 1 && status === "start") {return startFirstCellStyle(dayOfWeek)} else
    if (day === 1 && status === "end") {return endFirstCellStyle(dayOfWeek)} else
    if (day === 1 && bookedStart === "-") {return firstCellStyle(dayOfWeek)} else
    if (day === 1 && bookedStart === "+") {return endFirstCellStyle(dayOfWeek)} else
    if (day === 1 && status === "selected") {return selectedFirstCellStyle(dayOfWeek)} else
    if (day === 1) {return offFirstCellStyle(dayOfWeek)} else
    if (status === "") {return otherCellStyle} else
    if (status === "start") {return startOtherCellStyle} else
    if (status === "end") {return endOtherCellStyle} else 
    if (bookedStart === "-") {return otherCellStyle} else 
    if (bookedStart === "+") {return endOtherCellStyle} else 
    if (status === "selected") {return selectedOtherCellStyle} else {return offOtherCellStyle}
};

export const twoFieldStyle = {
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: "auto auto",
    gridTemplateRows: "auto auto",
    gridAutoFlow: "column",
    cursor: "default",
};

export const fieldStyle = {
    display: "grid",
    justifyContent: "center",
    alignContent: "start",
    gridTemplateColumns: "auto ".repeat(7),
    gridTemplateRows: "auto ".repeat(7),
    margin: "20px",
};

export const monthFieldStyle = {
    height: "18px",
    color: "#0C73FE",
    textAlign: "center",
};

export const headerFieldStyle = {
    width: "75px",
    height: "75px",
};

export const bodyStyle = {
    fontFamily: `"Montserrat", "Arial", sans-serif`,
    fontWeight: "400px",
    fontSize: "18px",
    lineHeight: "18px",
    minWidth: "1300px",
    margin: "0px",
    padding: "0px",
};

export const containerStyle = {
    position: "relative",
    width: "1260px",
    margin: "40px auto 0px",
};

export const dayOnStyle = {
    margin: "0px",
    marginTop: "15px",
    textAlign: "center",
    fontSize: "28px",
};

export const dayOffStyle = {
    margin: "0px",
    marginTop: "15px",
    textAlign: "center",
    fontSize: "28px",
    color: "#9ea9b7",
};

export const dayStyle = (status: string) => {
    if (status === "" || status === "selected" || status === "start" || status === "end") {return dayOnStyle} else {return dayOffStyle}
};

export const priceOnStyle = {
    margin: "0px",
    marginTop: "10px",
    textAlign: "center",
    fontSize: "16px",
    color: "#9ea9b7",
};

export const priceOffStyle = {
    visibility: "hidden",
    margin: "0px",
    marginTop: "10px",
    textAlign: "center",
    fontSize: "16px",
    color: "#9ea9b7",
};

export const priceBookedStyle = {
    margin: "0px",
    marginTop: "10px",
    textAlign: "center",
    fontSize: "14px",
    color: "#0C73FE",
};

export const priceStyle = (status: string) => {
    if (status === "" || status === "selected" || status === "start" || status === "end") {return priceOnStyle} else
    if (status === "off") {return priceOffStyle} else {return priceBookedStyle}
};

export const dayOfWeekStyle = {
    margin: "0px",
    marginTop: "25px",
    textAlign: "center",
    fontSize: "28px",
    color: "#9ea9b7",
};

export const weekendStyle = {
    margin: "0px",
    marginTop: "25px",
    textAlign: "center",
    fontSize: "28px",
    color: "#F8A54F",
};

export const leftArrowStyle = {
    left: "0px",
    top: "310px",
    position: "absolute",
    height: "60px",
    width: "60px",
    background: "white",
    color: "#0C73FE",
    fontSize: "50px",
    lineHeight: "60px",
    border: "2px solid #0C73FE",
    borderRadius: "40px",
    textAlign: "center",
    padding: "0px",
    cursor: "pointer",
};

export const rightArrowStyle = {
    right: "0px",
    top: "310px",
    position: "absolute",
    height: "60px",
    width: "60px",
    color: "#0C73FE",
    fontSize: "50px",
    lineHeight: "60px",
    border: "2px solid #0C73FE",
    borderRadius: "40px",
    textAlign: "center",
    padding: "0px",
    cursor: "pointer",
};

export const formStyle = {
    position: "relative",
    width: "400px",
    borderTop: "2px solid #9ea9b7",
    marginLeft: "auto",
    marginRight: "auto",
};

export const clear = {
    boxSizing: "border-box",
    right: "0px",
    top: "33px",
    position: "absolute",
    height: "40px",
    width: "40px",
    padding: "0px",
    paddingTop: "10px",
    border: "1px solid #0C73FE",
    borderRadius: "10px",
    textAlign: "center",
    cursor: "pointer",
};

export const lableFormStyle = {
    display: "inline-block",
    width: "190px",
    margin: "0px",
    marginTop: "10px",
    marginRight: "20px",
};

export const secondLableFormStyle = {
    display: "inline-block",
    width: "190px",
    margin: "0px",
    marginTop: "10px",
};

export const dateFormStyle = {
    display: "inline-block",
    boxSizing: "border-box",
    width: "190px",
    height: "40px",
    margin: "0px",
    marginTop: "5px",
    marginRight: "20px",
    paddingTop: "10px",
    paddingLeft: "10px",
    border: "1px solid #0C73FE",
    borderRadius: "10px",
};

export const secondDateFormStyle = {
    display: "inline-block",
    boxSizing: "border-box",
    width: "140px",
    height: "40px",
    margin: "0px",
    marginTop: "5px",
    paddingTop: "10px",
    paddingLeft: "10px",
    border: "1px solid #0C73FE",
    borderRadius: "10px",
};

export const thirdDateFormStyle = {
    display: "inline-block",
    boxSizing: "border-box",
    width: "190px",
    height: "40px",
    margin: "0px",
    marginTop: "5px",
    marginRight: "20px",
    paddingLeft: "10px",
    border: "1px solid #0C73FE",
    borderRadius: "10px",
    fontFamily: `"Montserrat", "Arial", sans-serif`,
    fontWeight: "400px",
    fontSize: "18px",
    lineHeight: "18px",
};

export const fourthDateFormStyle = {
    display: "inline-block",
    boxSizing: "border-box",
    width: "190px",
    height: "40px",
    margin: "0px",
    marginTop: "5px",
    paddingLeft: "10px",
    border: "1px solid #0C73FE",
    borderRadius: "10px",
    fontFamily: `"Montserrat", "Arial", sans-serif`,
    fontWeight: "400px",
    fontSize: "18px",
    lineHeight: "18px",
};