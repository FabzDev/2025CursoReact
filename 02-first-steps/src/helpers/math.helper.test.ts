import { describe, expect, test } from "vitest";
import { mult, rest, sum } from "./math.helper";

describe("add", () => {
  test("should add 2 positive numbers", () => {
    // ! 1. Arrange
    const a = 5;
    const b = 3;

    // ! 2. Act
    const result = sum(a, b);

    // ! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe("rest", () => {
  test("should subtract 2 positive numbers", () => {
    // ! 1. Arrange
    const a = 5;
    const b = 3;

    // ! 2. Act
    const result = rest(a, b);

    // ! 3. Assert
    expect(result).toBe(a - b);
  });

  test("should subtract 2 negative numbers", () => {
    // ! 1. Arrange
    const a = 5;
    const b = 3;

    // ! 2. Act
    const result = rest(a, b);

    // ! 3. Assert
    expect(result).toBe(a - b);
  });
});

describe("multiply", () => {
  test("should multiply 2 positive numbers", () => {
    // ! 1. Arrange
    const a = 5;
    const b = 3;

    // ! 2. Act
    const result = mult(a, b);

    // ! 3. Assert
    expect(result).toBe(a * b);
  });

  test("should multiply zero numbers", () => {
    // ! 1. Arrange
    const a = 0;
    const b = 3;

    // ! 2. Act
    const result = mult(a, b);

    // ! 3. Assert
    expect(result).toBe(a * b);
  });
});