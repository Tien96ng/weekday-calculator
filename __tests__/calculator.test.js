import weekdayCalculator from "../src/js/calculator.js";

describe("weekdayCalculator", () => {


  test("Should return day of the given date.", () => {
    expect(weekdayCalculator("01/01/2021")).toEqual("Fri");
  });

  test("Should return day of the given date in the future.", () => {
    expect(weekdayCalculator("01/01/2022")).toEqual("Sat");
  });


});