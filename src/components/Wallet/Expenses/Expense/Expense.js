import { useState } from 'react';
import dateConverter from '../../../../utils/dateConverter';
import './expense.scss';
import Form from '../../Form/Form';

const Expense = (props) => {
  const {
    id,
    amount,
    category_id,
    category,
    timeStamp,
    description
  } = props.expense;

  const [editing, setEditing] = useState(false);

  const editExpense = () => {
    setEditing(!editing)
  }

  return (
    <div className={'expense'}>
      {!editing &&
        <div className={'expense__details'}>
          <div className={'expense__date'}>
            { dateConverter(timeStamp, 'time') }
          </div>
          <div>
            <div className={'expense__amount'}>{amount}</div>
            {category && <div className={'expense__category'}>{category.title}</div> }
          </div>
          <div className={'expense__description'}>{description}</div>
        </div>
      }

      {editing && <Form
        id={id}
        amount={amount}
        category={category_id}
        timeStamp={timeStamp}
        description={description}
        editExpense={editExpense}
      />}

      {!editing &&
        <div className={'expense__actions'}>
          <button onClick={editExpense}>Edit</button>
        </div>
      }
    </div>
  )
}

export default Expense;
