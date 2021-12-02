const dateConvert = (timeStamp, format) => {

  const date = new Date(timeStamp);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  //  TODO: Create formatter by settings.
  const addZero = (variable) => {
    return '0' + variable;
  }

  if (day.toString().length === 1) {
    day = addZero(day)
  }
  if (month.toString().length === 1) {
    month = addZero(month);
  }
  if (hours.toString().length === 1) {
    hours = addZero(hours);
  }
  if (minutes.toString().length === 1) {
    minutes = addZero(minutes);
  }

  switch (format) {
    case 'time':
      return `${hours}:${minutes}`
    default:
      return `${day}-${month}-${year}, ${hours}:${minutes}`;
  }
}

export default dateConvert;