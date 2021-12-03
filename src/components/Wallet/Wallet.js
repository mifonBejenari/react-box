import { useEffect, useState, useContext } from 'react';
import './wallet.scss';
import Expenses from './Expenses/Expenses';
import Form from './Form/Form';
import AppContext from '../../utils/Context';

const Wallet = () => {
  const context = useContext(AppContext);

  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);

  // Get data from DB.
  useEffect (() => {
    //  Get all expenses.
    fetch('http://localhost:3001/expenses?_sort=timeStamp&_order=desc')
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        setExpenses(data)
      })

    //  Get all categories.
    fetch('http://localhost:3001/categories')
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        setCategories(data)
      })
  }, []);

  //  Update Expenses by category.
  useEffect (() => {
    let newExpenses = [];

    expenses.map(item => {
      const categoryId = item.category_id;
      const newItem = { ...item, category: categories.find(item => item.machineName === categoryId) }
      newExpenses.push(newItem)
    })

    context.setExpenses(newExpenses);

  }, [expenses, categories]);

  //  Update Categories by expenses
  useEffect (() => {
    context.setCategories(categories);
  }, [categories]);

  return (
    <>
      <div className={'wallet'}>
        <h3>Wallet</h3>
        <Form />

        <Expenses expenses={context.expenses} />
      </div>
    </>
  )
}

export default Wallet;
