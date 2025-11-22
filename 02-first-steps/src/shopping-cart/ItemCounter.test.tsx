import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("FirstSeptsApp", () => {
  test("should render with default quantity", () => {
    //Arrange
    const productTest = "Nintendo Switch";
    render(<ItemCounter productName={productTest} />);
    // screen.debug();
    // Act
    // Assert
    expect(screen.getByText(productTest)).toBeDefined();
    // console.log(screen.getByRole("   "))
  });

  test("should render with default quantity", () => {
    //Arrange
    const productTest = "Nintendo Switch";
    const quantity = 10;

    render(<ItemCounter productName={productTest} quantity={quantity} />);
    // screen.debug();
    // Act
    // Assert
    expect(screen.getByText(productTest)).toBeDefined();
    // console.log(screen.getByRole("   "))
  });

  test("should increase count when +1 button is pressed", () => {
    render(<ItemCounter productName="Test Product" />);
    // screen.debug();

    const [, buttonSum] = screen.getAllByRole("button");
    fireEvent.click(buttonSum);

    expect(screen.getByText("2")).toBeDefined();
  });

  test("should decrease count when -1 button is pressed and quantity is defined", () => {
    const testQuantity = 5;
    render(<ItemCounter productName="Test Product" quantity={testQuantity} />);
    // screen.debug();

    const [buttonSub] = screen.getAllByRole("button");
    fireEvent.click(buttonSub);

    expect(screen.getByText("4")).toBeDefined();
  });

  test("should not decrease count when -1 button is pressed and quantity 1", () => {
    const testQuantity = 1;
    render(<ItemCounter productName="Test Product" quantity={testQuantity} />);
    // screen.debug();

    const [buttonSub] = screen.getAllByRole("button");
    fireEvent.click(buttonSub);

    expect(screen.getByText("1")).toBeDefined();
  });

  test("productName should be red if quantity is 1", () => {
    const productTest = "Nintendo Switch";
    const testQuantity = 1;
    render(<ItemCounter productName={productTest} quantity={testQuantity} />);
    screen.debug();

    const productNameElement = screen.getByText(productTest);
    // console.log(productNameElement.style);
    // console.log(productNameElement.style.color);

    expect(productNameElement.style.color).toBe('red');       
  });

  test("productName should be 'rgb(254, 254, 254)' if quantity is > 1", () => {
    const productTest = "Nintendo Switch";
    const testQuantity = 2;
    render(<ItemCounter productName={productTest} quantity={testQuantity} />);
    // screen.debug();

    const productNameElement = screen.getByText(productTest);
    // console.log(productNameElement.style);
    // console.log(productNameElement.style.color);

    expect(productNameElement.style.color).toBe('rgb(254, 254, 254)');       
  });
});
