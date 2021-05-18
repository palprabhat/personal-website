import { render, screen } from "@testing-library/react";
import Hero from "../hero";
import {
  heroHeading,
  linkedInIcon as linkedInIconId,
  githubIcon as githubIconId,
  twitterIcon as twitterIconId,
  downloadLink,
  feelingProudSvg,
  introHeading as introHeadingId,
  introDescription as introDescriptionId,
  heroPara,
} from "../../constants/testIds.const";

beforeEach(() => {
  render(<Hero />);
});

describe("Hero Component", () => {
  it("matches snapshot", () => {
    const { container } = render(<Hero />);
    expect(container).toMatchSnapshot();
  });

  it("renders heading", () => {
    const heading = screen.queryByTestId(heroHeading);
    const para = screen.queryByTestId(heroPara);

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Full-stack web developer");
    expect(para).toBeInTheDocument();
  });

  it("renders social icons", () => {
    const linkedInIcon = screen.queryByTestId(linkedInIconId);
    const githubIcon = screen.queryByTestId(githubIconId);
    const twitterIcon = screen.queryByTestId(twitterIconId);

    expect(linkedInIcon).toBeInTheDocument();
    expect(githubIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();

    expect(linkedInIcon).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/prabhatpal14/"
    );
    expect(githubIcon).toHaveAttribute("href", "https://github.com/palprabhat");
    expect(twitterIcon).toHaveAttribute(
      "href",
      "https://twitter.com/prabhatpal14"
    );
  });

  it("renders download button", () => {
    const button = screen.queryByTestId(downloadLink);

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Download Resume");
  });

  it("renders feeling proud svg", () => {
    const svg = screen.queryByTestId(feelingProudSvg);
    expect(svg).toBeInTheDocument();
  });

  it("renders intro section", () => {
    const introHeading = screen.queryByTestId(introHeadingId);
    const introDescription = screen.queryByTestId(introDescriptionId);

    expect(introHeading).toBeInTheDocument();
    expect(introDescription).toBeInTheDocument();
  });
});
