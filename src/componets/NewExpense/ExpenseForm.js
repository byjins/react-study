import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = (props) =>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enterdTitle:'',
    //     enterdAmount:'',
    //     enterdDate:''
    // });

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterdTitle: event.target.value
        // })
    }

    const amountChangeHandler = (event) =>{
        //type 1
        setEnteredAmount(event.target.value);
        //type 2 -> 문제점 ? 이전 상태에 대한 의존 시 해당 userInput의 값이 최신이 아닐수 있다.
        // setUserInput({
        //     ...userInput,
        //     enterdAmount: event.target.value
        // })
        //type 3 -> 해결법 ? 이전 상태에 대한 의존 시 아래의 접근 방법으로 하는 것을 추천
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enterdTitle: event.target.value
        //     }
        // });
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterdDate: event.target.value
        // })
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>제목</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>가격</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>날짜</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>취소하기</button>
                <button type="submit">추가하기</button>
            </div>
        </form>
    );
}
export default ExpenseForm;