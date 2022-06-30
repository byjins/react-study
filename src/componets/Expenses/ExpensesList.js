import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) =>{
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">아이템을 찾을 수 없습니다.</h2>
    }

    return (
        <ul className="expenses-list">
            {
                props.items.map((item) => (
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                ))
            }
        </ul>
    )
}

export default ExpensesList;