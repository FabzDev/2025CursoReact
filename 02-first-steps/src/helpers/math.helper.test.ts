import { expect, test } from "vitest";
import { sum } from "./math.helper";

test("should add 2 positive numbers", () => {
  // ! 1. Arrange
  const a = 5;
  const b = 3;

  // ! 2. Act
  const result = sum(a, b);

  // ! 3. Assert
  expect(result).toBe(a + b);
});
