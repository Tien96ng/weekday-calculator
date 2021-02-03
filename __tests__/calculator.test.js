import weekdayCalculator from "../src/js/calculator.js";

describe("weekdayCalculator", () => {


  test("Should return day of the given date.", () => {
    expect(weekdayCalculator("01/01/2021")).toEqual("Fri");
  });


});