import Expense from './Expense/Expense';
import './expenses.scss';

const Expenses = (props) => {
  const { expenses } = props;

  return (
    <>
      <h3>Expenses</h3>

      <ul className={'expense-list'}>
        {expenses.map(item => (
          <li key={item.id}>
            <Expense expense={item} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Expenses;