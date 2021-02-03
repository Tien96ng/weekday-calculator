export function validDateChecker(input) {
  let inputDate = new Date(Date.parse(input));
  if(isNaN(inputDate.getHours())) {
    return false;
  } else {
    return true;
  }
}

export function getDate(input) {
  if(validDateChecker(input)) {
    let inputDate = new Date(Date.parse(input));
    return inputDate.toString().slice(0, 3);
  } else {
    return "Invalid Date Entered."
  }
}
