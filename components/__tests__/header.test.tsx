import { render, screen } from "@testing-library/react";
import Header from "../header";
import { headerTestId, logoId, myEmail } from "../../constants/testIds.const";

describe("Header Component", () => {
  it("renders correct content", () => {
    render(<Header />);

    const header = screen.queryByTestId(headerTestId);
    const image = screen.queryByTestId(logoId);
    const email = screen.queryByTestId(myEmail);

    expect(header).toBeInTheDocument();
    expect(header).toContainElement(image);
    expect(header).toContainElement(email);
  });
});
