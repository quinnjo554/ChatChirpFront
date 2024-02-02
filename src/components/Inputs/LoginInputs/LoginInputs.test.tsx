import { render, screen } from "@testing-library/react";
import LoginModalInputs from "./LoginInputs";
import { it } from "node:test";
import toMatchImageSnapshot from "jest-snapshot";
test("login", () => {
  it("should render a diolog box", () => {
    const renderer = render(<LoginModalInputs />);
    expect(renderer).toMatchSnapshot();
  });
});
