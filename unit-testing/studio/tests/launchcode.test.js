// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("should check the organization", () => {
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("should check the name of the executive director", () => {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("should check the percentage of cool employees", () => {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("should check the value and quantity of the programs offered", () => {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });
});

describe("Testing LaunchOutput", () => {

  test("only divisible by 2", () => {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  });

  test("only divisible by 3", () => {
    expect(launchcode.launchOutput(3)).toBe("Code!");
  });

  test("only divisible by 5", () => {
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  });

  test("only divisible by 2 and 3", () => {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });

  test("only divisible by 3 and 5", () => {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });

  test("only divisible by 2 and 5", () => {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
  });

  test("divisible by 2, 3, and 5", () => {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  });

  test("not divisible by 2, 3, or 5", () => {
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  });
});