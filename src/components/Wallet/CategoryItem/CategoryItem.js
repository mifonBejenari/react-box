import { useState } from 'react';


const CategoryItem = (props) => {
  // const [formState, setFormState] = useState(false);
  //
  // const { category } = props;
  //
  // const openForm = () => {
  //   setFormState(!formState);
  // }
  //
  // const addSpent = (e) => {
  //   e.preventDefault();
  //   console.log('addSpent', e);
  // }

  return (
    <>
      Category
      <div>
        <div>
          <div>{category.icon}</div>
          <h4>{category.category}</h4>
        </div>
        <p>{category.description}</p>
        <div>Spent: <span>{category.spent}</span></div>
      </div>
      <button onClick={openForm}>Add ( + )</button>
      <form action="" className={`form form__add-spent form__add-spent--${formState ? 'open' : 'closed'}`}>
        <input type="number"/>
        <textarea name="" id="" cols="30" rows="2"></textarea>
        <button onClick={addSpent} type="submit" >Add</button>
      </form>
    </>
  )
}

export default CategoryItem;
