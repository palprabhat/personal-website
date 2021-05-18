import { render } from "@testing-library/react";
import { myEmail as myEmailId } from "../../constants/testIds.const";
import MyEmail from "../myEmail";

describe("MyEmail Component", () => {
  it("renders correct content", () => {
    const { container, queryByTestId } = render(<MyEmail />);
    const email = queryByTestId(myEmailId);

    expect(email).toBeInTheDocument();
    expect(email).toHaveTextContent("prabhatpal.14@gmail.com");

    expect(container).toMatchSnapshot();
  });
});
