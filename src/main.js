import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { getDate, validDateChecker } from "./js/calculator.js";

$(document).ready(() => {
  $("#form").submit((e) => {
    e.preventDefault();
    let date = $("#date").val();

    let checkedDate =  validDateChecker(date);
    if(!checkedDate) { // checkedDate === false
      $("#invalid-message").show();
    } else {
      let validDate = getDate(date);
      $("#day").text(`Day on date entered: ${validDate}`);
      // "Day on date entered: " + validDate
    }

    $("#form")[0].reset();
  });
});