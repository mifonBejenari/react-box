import Expense from './Expense/Expense';

const Expenses = (props) => {
  const { expenses } = props;

  return (
    <>
      <h3>Expenses</h3>

      <ul>
        {expenses.map(item => (
          <li key={item.id}>
            <Expense expense={item}/>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Expenses;