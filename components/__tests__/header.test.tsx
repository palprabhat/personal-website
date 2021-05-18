import { render } from "@testing-library/react";
import Header from "../header";
import { headerTestId, logoId, myEmail } from "../../constants/testIds.const";

describe("Header Component", () => {
  it("renders correct content", () => {
    const { container, queryByTestId } = render(<Header />);

    const header = queryByTestId(headerTestId);
    const image = queryByTestId(logoId);
    const email = queryByTestId(myEmail);

    expect(header).toBeInTheDocument();
    expect(header).toContainElement(image);
    expect(header).toContainElement(email);

    expect(container).toMatchSnapshot();
  });
});
