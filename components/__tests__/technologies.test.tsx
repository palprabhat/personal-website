import { render } from "@testing-library/react";
import Technologies from "../technologies";

describe("Technologies Component", () => {
  it("matches snapshot", () => {
    const { container } = render(<Technologies />);

    expect(container).toMatchSnapshot();
  });
});
