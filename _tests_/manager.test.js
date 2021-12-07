const { expect, beforeEach, test } = require("@jest/globals");
const Manager = require("../lib/Manager");

const testData = {
  name: "Manager",
  id: "1",
  email: "testmanager@gmail.com",
  officeNumber: "1111",
};
let manager;

beforeEach(() => {
  manager = new Manager(
    testData.name,
    testData.id,
    testData.email,
    testData.officeNumber
  );
});

test("creates Manager object", () => {
  expect(manager.name).toBe(testData.name);
  expect(manager.id).toBe(testData.id);
  expect(manager.email).toBe(testData.email);
  expect(manager.officeNumber).toBe(testData.officeNumber);
});

test("returns name", () => {
  expect(manager.getName()).toBe(testData.name);
});

test("returns id", () => {
  expect(manager.getId()).toBe(testData.id);
});

test("returns email", () => {
  expect(manager.getEmail()).toBe(testData.email);
});

test("returns role", () => {
  expect(manager.getRole()).toBe("Manager");
});

test("returns office number", () => {
  expect(manager.getOfficeNumber()).toBe(testData.officeNumber);
});
