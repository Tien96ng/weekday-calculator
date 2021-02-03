export function getDate(input) {
  let inputDate = new Date(Date.parse(input));
  return inputDate.toString().slice(0, 3);
}

export function validDateChecker(input) {
  let inputDate = new Date(Date.parse(input)); // Andrew = NaN
  if(isNaN(inputDate.getHours())) {
    return "Please Enter in a valid Date!";
  } else {
    return "Date is Valid.";
  }
}
