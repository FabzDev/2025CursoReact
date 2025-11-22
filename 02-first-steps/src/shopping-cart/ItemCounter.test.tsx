import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("FirstSeptsApp", () => {
  
    test("should render with default quantity", () => {
    //Arrange
    const productTest = "Nintendo Switch";
    render(<ItemCounter productName={productTest} />);
    screen.debug();
    // Act
    // Assert
    expect(screen.getByText(productTest)).toBeDefined();
    // console.log(screen.getByRole("   "))
  });

  test("should render with default quantity", () => {
    //Arrange
    const productTest = "Nintendo Switch";
    const quantity = 10;

    render(<ItemCounter productName={productTest} quantity={quantity}/>);
    screen.debug();
    // Act
    // Assert
    expect(screen.getByText(productTest)).toBeDefined();
    // console.log(screen.getByRole("   "))

  });
});
