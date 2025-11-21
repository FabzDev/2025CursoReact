import { describe, test } from "vitest";
import { render } from "@testing-library/react";

import { MyAwesomeApp } from "./MyAwesomeApp";


describe('MyAwesomeApp', () => {
  test("Should render MyAwesomeApp component", () => {
   const algo = render(<MyAwesomeApp />)

   console.log(algo);
   
  })
})