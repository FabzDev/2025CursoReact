import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

const mockItemCounter = vi.fn((_props: unknown) => {
  return <div data-testid="ItemCounter"/>;
});

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

// vi.mock("./shopping-cart/ItemCounter", ()=>({
//   ItemCounter: () => (<div data-testid="ItemCounter" />)
// }))

describe("FirstStepsApp", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should match snapshot", () => {
    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();
    // screen.debug();
  });

  test("should render the correct amount of ItemCounter elements", () => {
    render(<FirstStepsApp />);
    const ItemCounterElements = screen.getAllByTestId("ItemCounter");
    expect(ItemCounterElements.length).toBe(4);
  });

  test("should render the ItemCounter 4 times", () => {
    render(<FirstStepsApp />);
    screen.debug();
    expect(mockItemCounter).toBeCalledTimes(4);
    expect(mockItemCounter).toHaveBeenCalledWith(
      {
        productName: "Nintendo Switch",
        quantity: 1,
      });
    expect(mockItemCounter).toHaveBeenCalledWith(
      {
        productName: "Pro Controller",
        quantity: 2,
      });
    expect(mockItemCounter).toHaveBeenCalledWith(
      {
        productName: "Super Smash Bros",
        quantity: 1,
      });
    expect(mockItemCounter).toHaveBeenCalledWith(
      {
        productName: "Super Mario Bros",
        quantity: 1,
      });
  });
});
