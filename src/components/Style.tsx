export const firstCellStyle = (dayOfWeek: number) => {
    return {
        width: "75px",
        height: "75px",
        color: "#0C131D",
        gridColumn: dayOfWeek,
    } 
};

export const selectedFirstCellStyle = (dayOfWeek: number) => {
    return {
        width: "75px",
        height: "75px",
        color: "#0C131D",
        gridColumn: dayOfWeek,
        border: "1px solid #0C73FE",
        borderRadius: "50px",
    } 
};

export const otherCellStyle = {
    width: "75px",
    height: "75px",
    textColor: "#0C131D",
};

export const selectedOtherCellStyle = {
    width: "75px",
    height: "75px",
    textColor: "#0C131D",
    border: "1px solid #0C73FE",
    borderRadius: "50px",
};

export const twoFieldStyle = {
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: "auto ".repeat(2),
    gridTemplateRows: "auto ".repeat(2),
    gridAutoFlow: "column",
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
    color: "#0C73FE",
    textAlign: "center",
};

export const headerFieldStyle = {
    width: "75px",
    height: "75px",
};

export const bodyStyle = {
    fontFamily: `"Gill Sans", sans-serif`,
    fontWeight: "normal",
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

export const dayStyle = {
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

export const priceStyle = {
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
    fontSize: "16px",
    color: "#0C73FE",
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
    border: "3px solid #0C73FE",
    borderRadius: "50px",
    textAlign: "center",
    padding: "0px",
};

export const rightArrowStyle = {
    right: "0px",
    top: "310px",
    position: "absolute",
    height: "60px",
    width: "60px",
    background: "white",
    color: "#0C73FE",
    fontSize: "50px",
    lineHeight: "60px",
    border: "3px solid #0C73FE",
    borderRadius: "50px",
    textAlign: "center",
    padding: "0px",
};

export const formStyle = {

};