const { expect, beforeEach, test } = require("@jest/globals");
const Intern = require("../lib/Intern");

const testData = {
  name: "Intern",
  id: "3",
  email: "testintern@gmail.com",
  school: "Noo Non school of code",
};
let intern;

beforeEach(() => {
  intern = new Intern(
    testData.name,
    testData.id,
    testData.email,
    testData.school
  );
});

test("creates Intern object", () => {
  expect(intern.name).toBe(testData.name);
  expect(intern.id).toBe(testData.id);
  expect(intern.email).toBe(testData.email);
  expect(intern.school).toBe(testData.school);
});

test("returns name", () => {
  expect(intern.getName()).toBe(testData.name);
});

test("returns id", () => {
  expect(intern.getId()).toBe(testtData.id);
});

test("returns email", () => {
  expect(intern.getEmail()).toBe(testData.email);
});

test("returns role", () => {
  expect(intern.getRole()).toBe("Intern");
});

test("returns school", () => {
  expect(intern.getSchool()).toBe(testData.school);
});