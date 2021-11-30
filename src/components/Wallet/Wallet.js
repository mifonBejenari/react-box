import { useEffect, useState } from 'react';
import './wallet.scss';
import Expenses from './Expenses/Expenses';
import Form from './Form/Form';

const Wallet = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect (() => {
    fetch('http://localhost:3001/expenses')
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        setExpenses(data);
        console.log(data)
      })
  }, [])

  return (
    <>
      <div className={'wallet'}>
        <h3>Wallet</h3>
        <Form />

        <Expenses expenses={expenses}/>
      </div>
    </>
  )
}

export default Wallet;
