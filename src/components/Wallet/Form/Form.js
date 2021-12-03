import { useState, useContext } from 'react';
import './form.scss';
import AppContext from '../../../utils/Context';

const Form = (props) => {
  const {
    id,
    amount,
    category,
    timeStamp,
    description
  } = props;

  const context = useContext(AppContext);
  const categories = context.categories;

  const [formStateOpen, setFormState] = useState(!!id);
  const [amountState, setAmountState] = useState(amount || 0);
  const [descriptionState, setDescriptionState] = useState(description || '');
  const [categoryState, setCategoryState] = useState(category || 'empty');
  const [timeStampState, setTimeStampState] = useState(timeStamp || 0);

  const openForm = () => {
    setFormState(!formStateOpen);
  }

  const resetForm = () => {
    if (id) {
      setAmountState(amount);
      setDescriptionState(description);
      setCategoryState(category);
    }
    else {
      setAmountState(0);
      setDescriptionState('')
    }
  }

  const updateValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'Amount':
        return setAmountState(value);
      case 'Description':
        return setDescriptionState(value);
      case 'Category':
        return setCategoryState(value);
      default:
        return ''
    }
  }

  const validateForm = () => {
    return amountState.length > 0 && amountState !== 0;
  }

  const postExpense = () => {
    fetch(`http://localhost:3001/expenses${id ? '/' + id : ''}`, {
      method: id ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        amount: amountState,
        description: descriptionState,
        category_id: categoryState,
        timeStamp: timeStampState
      })
    })
      .then(() => {
        const expense = {
          amount: amountState,
          description: descriptionState,
          category_id: categoryState,
          timeStamp: timeStampState
        }

        let newExpenses = context.expenses;

        if (id) {
          expense.id = id;
          newExpenses = context.expenses.filter(item => item.id !== id)
        }
        else {
          expense.id = Math.max(...context.expenses.map(obj => obj.id), 0) + 1;
          expense.timeStamp = Date.now();
        }
        const objArr = [expense];


        const newArr = objArr.concat(newExpenses)

        context.setExpenses(newArr)

      })
  }

  const submitExpense = (e) => {
    e.preventDefault();
    if (validateForm() === true) {
      postExpense();
      resetForm();
      setTimeStampState(Date.now());
    }
  }

  const updateExpense = (e) => {
    e.preventDefault();
    if (validateForm() === true) {
      postExpense();
      props.editExpense(false)
    }
  }

  const removeExpense = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/expenses/' + id, {
      method: "DELETE",
    })
      .then(
        context.setExpenses(context.expenses.filter(item => item.id !== id))
      )
  }

  const cancelForm = (e) => {
    e.preventDefault();
    if (id) {
      props.editExpense(false);
    }
    setFormState(false);
    resetForm();
  }

  return (
    <>
      {!id && <button onClick={openForm}>( + )</button>}
      <form
        className={`form form__add-amount form__add-amount--${formStateOpen ? 'open' : 'closed'}`}
      >
        <div>
          <input
            className={""}
            type="number"
            value={amountState}
            name="Amount"
            onChange={updateValue}
          />
        </div>

        <div className={''}>
          <select
            name="Category"
            value={categoryState}
            onChange={updateValue}
          >
            <option value={'empty'} defaultValue> -- Select an option -- </option>

            {categories.map(item => (
              <option value={item.machineName} key={item.id}>{item.title}</option>
            ))}

          </select>
        </div>

        <div>
          <textarea
            name="Description"
            id=""
            cols="30"
            rows="2"
            placeholder={'Description'}
            value={descriptionState}
            onChange={updateValue}
          />
        </div>

        <div className={'form__actions'}>
          {id ? (
            <>
              <button onClick={updateExpense}>Update ( + )</button>
              <button onClick={cancelForm}>Cancel ( / )</button>
              <button onClick={removeExpense}>Remove ( X )</button>
            </>
          ) : (
            <>
              <button onClick={submitExpense} type="submit" >Add ( + )</button>
              <button onClick={cancelForm}>Cancel ( / )</button>
            </>
          )}
        </div>
      </form>
    </>
  )
}

export default Form;
