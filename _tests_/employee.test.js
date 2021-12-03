const { expect, beforeEach, test } = require("@jest/globals");
const Employee = require("../lib/Employee");

const testData = {
  name: "Employee",
  id: "0",
  email: "testEmployee@gmail.com",
};
let employee;

beforeEach(() => {
  employee = new Employee(
    testData.name,
    testData.id,
    testData.email
  );
});

test("creates Employee object", () => {
  expect(employee.name).toBe(testData.name);
  expect(employee.id).toBe(testData.id);
  expect(employee.email).toBe(testData.email);
});

test("returns name", () => {
  expect(employee.getName()).toBe(testData.name);
});

test("returns id", () => {
  expect(employee.getId()).toBe(testData.id);
});

test("returns email", () => {
  expect(employee.getEmail()).toBe(testData.email);
});

test('returns role', ()=>{
    expect(employee.getRole()).toBe('Employee');
})