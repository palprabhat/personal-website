import { render } from "@testing-library/react";
import ErrorText from "../errorText";

describe("ErrorText Component", () => {
  it("renders correct content", () => {
    const errorMessage = "Test Error message";
    const { container, queryByText } = render(
      <ErrorText>{errorMessage}</ErrorText>
    );

    const link = queryByText(errorMessage) as HTMLDivElement;

    expect(link).toBeInTheDocument();
    expect(link.innerHTML).toBe(errorMessage);

    expect(container).toMatchSnapshot();
  });
});
