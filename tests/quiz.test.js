// Tests use Node's built-in test runner, so nothing needs to be installed.
// Run them with:  npm test
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { shuffle, isCorrect, calculatePercentage, getGrade, getFeedbackMessage } = require("../src/quiz.js");

test("isCorrect returns true for the right answer", () => {
  assert.equal(isCorrect({ answer: 2 }, 2), true);
});

test("isCorrect returns false for a wrong answer", () => {
  assert.equal(isCorrect({ answer: 2 }, 0), false);
});

test("calculatePercentage rounds to a whole number", () => {
  assert.equal(calculatePercentage(2, 3), 67);
});

test("calculatePercentage returns 0 when there are no questions", () => {
  assert.equal(calculatePercentage(0, 0), 0);
});

test("shuffle keeps every item and does not change the original array", () => {
  const original = [1, 2, 3, 4, 5];
  const result = shuffle(original);
  assert.deepEqual([...result].sort(), [1, 2, 3, 4, 5]);
  assert.deepEqual(original, [1, 2, 3, 4, 5]);
});

test("getGrade gives an A for exactly 90%", () => {
  assert.equal(getGrade(90), "A");
});

test("getGrade gives a B for exactly 75%", () => {
  assert.equal(getGrade(75), "B");
});

test("getGrade gives a C for exactly 50%", () => {
  assert.equal(getGrade(50), "C");
});

test("getFeedbackMessage returns the A message for grade A", () => {
  assert.equal(getFeedbackMessage("A"), "Excellent work! You really know your stuff!");
});

test("getFeedbackMessage returns the B message for grade B", () => {
  assert.equal(
    getFeedbackMessage("B"),
    "Good job! You're doing well, but there's room for improvement."
  );
});

test("getFeedbackMessage returns the C message for grade C", () => {
  assert.equal(getFeedbackMessage("C"), "Not bad, but you might want to review the material.");
});

test("getFeedbackMessage returns the default message for an unknown grade", () => {
  assert.equal(getFeedbackMessage("D"), "Keep practicing! You'll get better with time.");
});

test("getFeedbackMessage returns the default message for null", () => {
  assert.equal(getFeedbackMessage(null), "Keep practicing! You'll get better with time.");
});

test("getFeedbackMessage returns the default message for empty input", () => {
  assert.equal(getFeedbackMessage(""), "Keep practicing! You'll get better with time.");
});
