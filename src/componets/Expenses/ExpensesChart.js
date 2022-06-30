import Chart from "../Chart/Chart";
import chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    const chartDataPoints = [
        {label: '1월', value: 0},
        {label: '2월', value: 0},
        {label: '3월', value: 0},
        {label: '4월', value: 0},
        {label: '5월', value: 0},
        {label: '6월', value: 0},
        {label: '7월', value: 0},
        {label: '8월', value: 0},
        {label: '9월', value: 0},
        {label: '10월', value: 0},
        {label: '11월', value: 0},
        {label: '12월', value: 0},
    ]

    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth(); // starting at 0 => 1월
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    return <Chart dataPoints={chartDataPoints}/>
}

export default ExpensesChart;