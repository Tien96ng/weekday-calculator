import weekdayCalculator from "../src/js/calculator.js";

describe("weekdayCalculator", () => {
  test("Should return undefined.", () => {
    expect(weekdayCalculator("01/01/2021")).toEqual("Thu");
  });
});