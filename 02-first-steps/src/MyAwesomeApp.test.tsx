import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("Should render MyAwesomeApp component", () => {
    // Arrange
    screen.debug();
    const { container } = render(<MyAwesomeApp />);
    const h1 = container.querySelector("h1");
    const h2 = screen.getByTestId("last-name-title");

    // Act
    
    // Asert
    expect(h1?.innerHTML).toContain("Fabio");
    expect(h2.innerHTML).toContain("Escobar");

    // No Test Related
    console.log(h1?.innerHTML);

  });

  test("Should match snapshot - Using {container}", () => {
    // Arrange
    const { container } = render(<MyAwesomeApp />);
    // Act
    // Asert
    expect(container).toMatchSnapshot()
    
  });

  test("Should match snapshot - Using Screen", () => {
    // Arrange
    render(<MyAwesomeApp />);
    // Act
    // Asert
    expect(screen.findAllByTestId("div-app")).toMatchSnapshot();
    
  });
});
