import { useEffect, useContext } from 'react';
import './wallet.scss';
import Expenses from './Expenses/Expenses';
import Form from './Form/Form';
import AppContext from '../../utils/Context';

const Wallet = () => {
  const context = useContext(AppContext);

  useEffect (() => {
    fetch('http://localhost:3001/expenses?_sort=timeStamp&_order=desc')
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        context.setExpenses(data);
      })
  }, [context.update])

  useEffect (() => {
    fetch('http://localhost:3001/categories')
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        context.setCategories(data);
        context.categories = data;
      })
  }, [])

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
