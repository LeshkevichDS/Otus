import React from "react";

interface FormProps {
    updateStatus: any,
    startDate: string,
    endDate: string,
    price: number,
};

export const Form: React.FC<FormProps> = ({updateStatus, startDate, endDate, price}) => {
    let name;
    const handleChange = (event) => {
        name = event.target.value;
    };
    return (
        <form method="get" action="form.php">
            <p>Заселение: {startDate}</p>
            <p>Выселение: {endDate}</p>
            <br/>
            <label>
                Имя:
                <input type="text" name="name" onChange={handleChange} required />
            </label><br/>
            <label>
                Email:
                <input type="email" name="email" required />
            </label><br/>
            <label>
                Время заселения:
                <select name="time">
                    <option value="10:00">10:00</option> 
                    <option value="12:00">12:00</option> 
                    <option value="14:00">14:00</option> 
                </select>
            </label>
            <p>Сумма к оплате: {price} рублей</p>
            <input type="button" value="Отправить" onClick={() => updateStatus(name)} />
        </form>
    )
};