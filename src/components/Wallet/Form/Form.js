import { useEffect, useState } from 'react';
import "./form.scss"

const Form = () => {

  const [formStateOpen, setFormState] = useState(false);

  const openForm = () => {
    setFormState(!formStateOpen);
  }

  const addExpense = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: 3, description: 'React POST Request Example', spent: 5 })
    }).then(
      console.log('addExpense')
  )}

  return (
    <>
      {console.log('formStateOpen', formStateOpen)}
      <button onClick={openForm}>Add Expense</button>
      <form action="" className={`form form__add-spent form__add-spent--${formStateOpen ? 'open' : 'closed'}`}>
        <div>
          <input type="number" className={""} required />
        </div>
        <div>
          <textarea name="" id="" cols="30" rows="2" placeholder={"Description"}/>
        </div>
        <button onClick={addExpense} type="submit" >Add ( + )</button>
      </form>
    </>
  )
}

export default Form;
