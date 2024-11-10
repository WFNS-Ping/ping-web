import { render } from "@testing-library/react";
import AlimItem from "./AlimItem";
import { screen } from "@storybook/test";

const mockAlimContent = "알림입니다!";
describe("AlimItem Component", () => {
  it("content로 전달받은 알림이 정상적으로 보여야 한다.", () => {
    render(<AlimItem content={mockAlimContent} />);
    const text = screen.getByText(mockAlimContent);
    expect(text).toBeInTheDocument();
  });
});
