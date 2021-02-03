export default function getDate(input) {
  let inputDate = new Date(Date.parse(input));
  return inputDate.toString().slice(0, 3);
}
