import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
jest.mock("../../hooks/useAppRouter");
describe("Navbar", () => {
  it("네브바 영역에는 '지도', '저장', '알림', '마이' 4개의 요소가 있어야 한다.", () => {
    render(<Navbar />);

    const navItems = screen.getAllByRole("listitem");
    expect(navItems.length).toBe(4);

    const titles = ["지도", "저장", "알림", "마이"];

    titles.forEach((item) => {
      const textElement = screen.getByText(item);
      expect(textElement).toBeInTheDocument();
    });
  });
});
