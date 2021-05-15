import { render } from "@testing-library/react";
import TimelineCard from "../timelineCard";

describe("TimelineCard Component", () => {
  it("matches snapshot", () => {
    const { baseElement } = render(<TimelineCard />);

    expect(baseElement).toMatchSnapshot();
  });
});
