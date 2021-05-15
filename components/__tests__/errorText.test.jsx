import { render } from "@testing-library/react";
import ErrorText from "../errorText";

describe("ErrorText Component", () => {
  it("renders correct content", () => {
    const errorMessage = "Test Error message";
    const { baseElement, queryByText } = render(
      <ErrorText>{errorMessage}</ErrorText>
    );

    const link = queryByText(errorMessage);

    expect(link).toBeInTheDocument();
    expect(link.innerHTML).toBe(errorMessage);

    expect(baseElement).toMatchSnapshot();
  });
});
