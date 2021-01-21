import React from "react";
import { lableFormStyle, secondLableFormStyle, dateFormStyle, secondDateFormStyle, thirdDateFormStyle, fourthDateFormStyle, clear } from "./Style";

interface FormProps {
    updateStatus: any,
    clearDate: any,
    startDate: string,
    endDate: string,
    price: number,
};

export const Form: React.FC<FormProps> = ({updateStatus, clearDate, startDate, endDate, price}) => {
    let name: string;
    const handleChange = (event) => {
        if (event.target.value != undefined) {name = event.target.value}
    };
    return (
        <form method="get" action="form.php">
            <p style={lableFormStyle}>Заселение:</p>
            <p style={secondLableFormStyle}>Выселение:</p>
            <p style={dateFormStyle}>{startDate}</p>
            <p style={secondDateFormStyle}>{endDate}</p>
            <div style={clear} onClick={clearDate}>X</div>
            <label style={lableFormStyle}>Имя:</label>
            <label style={secondLableFormStyle}>Email:</label>
            <input style={thirdDateFormStyle} type="text" name="name" onChange={handleChange} required />
            <input style={fourthDateFormStyle} type="email" name="email" required />
            <p>Сумма к оплате: {price} рублей</p>
            <input type="button" value="Отправить" onClick={() => updateStatus(name)} />
        </form>
    )
};