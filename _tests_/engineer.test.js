const { expect, beforeEach, test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

const testData = {
  name: "Engineer",
  id: "1",
  email: "testengineer@gmail.com",
  github: "gitTest",
};
let engineer;

beforeEach(() => {
  engineer = new Engineer(
    testData.name,
    testData.id,
    testData.email,
    testData.github
  );
});

test("creates Engineer object", () => {
  expect(engineer.name).toBe(testData.name);
  expect(engineer.id).toBe(testData.id);
  expect(engineer.email).toBe(testData.email);
  expect(engineer.github).toBe(testData.github);
});

test("returns name", () => {
  expect(engineer.getName()).toBe(testData.name);
});

test("returns id", () => {
  expect(engineer.getId()).toBe(testData.id);
});

test("returns email", () => {
  expect(engineer.getEmail()).toBe(testData.email);
});

test("returns role", () => {
  expect(engineer.getRole()).toBe("Engineer");
});

test("returns github user", () => {
  expect(engineer.getGithub()).toBe(testData.github);
});