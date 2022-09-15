import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props){
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Update!");
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            {/* <div className="expense-item__description">{props.date.toISOString()}</div> */}
            <h2>{title}</h2>
            <div>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;