const Expense = (props) => {
  const {
    spent,
    category,
    timeStamp,
    description
  } = props.expense;

  const dateConvert = () => {
    return timeStamp;
  }

  return (
    <>
      <div>
        <div>{dateConvert()}</div>
        <div>
          <div>{spent}</div>
          <div>{category}</div>
        </div>
        <p>{description}</p>
      </div>
    </>
  )
}

export default Expense;
