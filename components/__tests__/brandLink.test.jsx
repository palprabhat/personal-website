import { render, screen } from "@testing-library/react";
import BrandLink from "../brandLink";
import { brandLinkTest } from "../../constants/testIds.const";

describe("BrandLink Component", () => {
  it("renders correct content", () => {
    const testLink = "https://prabhatpal.com/";
    const testLabel = "Test Label";
    render(
      <BrandLink testId={brandLinkTest} link={testLink} ariaLabel={testLabel} />
    );

    const link = screen.queryByTestId(brandLinkTest);

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", expect.stringContaining(testLink));
    expect(link).toHaveAttribute(
      "aria-label",
      expect.stringContaining(testLabel)
    );
  });
});

// TODO: Add test for click event of brand link.
