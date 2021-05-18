import { render } from "@testing-library/react";
import FeelingProud from "../feelingProud";

describe("ErrorText Component", () => {
  it("matches snapshot", () => {
    const { baseElement } = render(<FeelingProud />);
    expect(baseElement).toMatchSnapshot();
  });
});
