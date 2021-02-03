import { getDate, validDateChecker } from "../src/js/calculator.js";

describe("getDate", () => {
  test("Should return day of the given date.", () => {
    expect(getDate("01/01/2021")).toEqual("Fri");
  });

  test("Should return day of the given date in the future.", () => {
    expect(getDate("01/01/2022")).toEqual("Sat");
  });
});

describe("validDateChecker", () => {
  test("Should console.log to tell the user if the date entered is valid.", () => {
    expect(validDateChecker("Andrew")).toEqual("Please Enter in a valid Date!");
  });
});