import { render, screen, waitFor } from "@testing-library/react";
import useAppRouter from "../../hooks/useAppRouter";
import NavItem from "./NavItem";
import userEvent from "@testing-library/user-event";

jest.mock("../../hooks/useAppRouter");
jest.mock("next/navigation", () => ({
  usePathname: () => "/test",
}));
const mockHook = jest.mocked(useAppRouter);

const mockBackfn = jest.fn();

describe("NavItem", () => {
  beforeEach(() => {
    mockHook.mockReturnValue({
      ...jest.requireActual("../../hooks/useAppRouter"),
      replace: mockBackfn,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it("NavItem을 클릭하면 router의 replace 함수가 props로 전달받은 href와 함께 호출되어야 한다.", async () => {
    render(<NavItem href="/test">테스트</NavItem>);

    const target = screen.getByRole("listitem");

    await waitFor(() => {
      userEvent.click(target);
      expect(mockBackfn).toHaveBeenCalledWith("/test");
    });
  });

  it("현재 페이지의 pathName이 navItem 컴포넌트의 href와 같다면 선택되어진 표시가 있어야 한다.", () => {
    render(<NavItem href="/test">테스트</NavItem>);

    const target = screen.getByRole("listitem");

    expect(target).toHaveClass("selected-nav-item");
  });
});
