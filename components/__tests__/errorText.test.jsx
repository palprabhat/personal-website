import { render, screen } from "@testing-library/react";
import ErrorText from "../errorText";
import { errorTextTest } from "../../constants/testIds.const";

describe("ErrorText Component", () => {
  it("renders correct content", () => {
    const errorMessage = "Test Error message";
    render(<ErrorText testId={errorTextTest}>{errorMessage}</ErrorText>);

    const link = screen.queryByTestId(errorTextTest);

    expect(link).toBeInTheDocument();
    expect(link.innerHTML).toBe(errorMessage);
  });
});
