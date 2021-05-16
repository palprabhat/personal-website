import { render, screen } from "@testing-library/react";
import ErrorText from "../errorText";

describe("ErrorText Component", () => {
  it("renders correct content", () => {
    const errorMessage = "Test Error message";
    render(<ErrorText>{errorMessage}</ErrorText>);

    const link = screen.queryByText(errorMessage);

    expect(link).toBeInTheDocument();
  });
});
