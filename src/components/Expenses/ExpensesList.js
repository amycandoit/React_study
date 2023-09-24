import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
import Card from "../UI/Card";

const ExpensesList = props => {


    if (props.item.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return (
        <div>
            <Card className="expenses-list">
                {props.item.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))}
            </Card>
        </div>

    );
};

export default ExpensesList;