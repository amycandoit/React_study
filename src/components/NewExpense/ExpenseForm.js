import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const onTitleChangeHandler = (e) => {
        //     setUserInput({
        //         ...userInput,
        //         enteredTitle : e.target.value})
        // }
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState, enteredTitle: e.target.value
        //     }
        // })
        setEnteredTitle(e.target.value)
    }
        const onAmountChangeHandler = (e) => {
            setEnteredAmount(e.target.value)
            // setUserInput({
            //     ...userInput,
            //     enteredAmount: e.target.value
            // })
        }

        const onDateChangeHandler = (e) => {
            setEnteredDate(e.target.value)
            // setUserInput({
            //     ...userInput,
            //     enteredDate: e.target.value
            // })
        }

        const onChangeHandler = (name, value) => {
            if(name === 'title') {
                setEnteredTitle(value)
            }else if(name==='amount'){
                setEnteredAmount(value)
            }else {
                setEnteredDate(value)
            }
        }

        const onSubmitHandler=(e) => {
            e.preventDefault();
            const expenseData = {
                title: enteredTitle,
                amount: enteredAmount,
                date: new Date(enteredDate)
            };
            props.onSaveExpenseData(expenseData);
            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
        }
        return (
            <form onSubmit={onSubmitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={(e)=>onChangeHandler('title', e.target.value)}/>
                        {/*<input type="text" onChange={onTitleChangeHandler}/>*/}
                    </div>

                    <div className="new-expense__control">
                        <label>Amount</label>
                        {/*<input type="number" min="0.01" step="0.01" onChange={(e)=>onChangeHandler('amount', e.target.value)}/>*/}
                        <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={onAmountChangeHandler}/>
                    </div>

                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2020-01-01" max="2023-12-31" value={enteredDate} onChange={onDateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit" >Add Expense</button>
                </div>
            </form>);

}


    export default ExpenseForm;