import { render } from "@testing-library/react";
import BrandLink from "../brandLink";
import { brandLinkTest } from "../../constants/testIds.const";

const testLink = "https://prabhatpal.com/";
const testLabel = "Test Label";

describe("BrandLink Component", () => {
  it("renders correct content", () => {
    const { container, queryByTestId } = render(
      <BrandLink
        testId={brandLinkTest}
        link={testLink}
        ariaLabel={testLabel}
        iconClass=""
      />
    );

    const link = queryByTestId(brandLinkTest);

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", testLink);
    expect(link).toHaveAttribute("aria-label", testLabel);

    expect(container).toMatchSnapshot();
  });
});
