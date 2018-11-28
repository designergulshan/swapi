const mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export const getDate = dateStr => {
  const dateObj = new Date(dateStr);

  const date = dateObj.getDate();
  const month = mS[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  return `${date} ${month} ${year}`
}