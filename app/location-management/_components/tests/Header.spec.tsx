import { render, screen, waitFor } from "@testing-library/react";
import Header from "../Header";
import userEvent from "@testing-library/user-event";
import useAppRouter from "../../../../hooks/useAppRouter";

jest.mock("../../../../hooks/useAppRouter");
const mockHook = jest.mocked(useAppRouter);

const mockBackfn = jest.fn();
describe("Header Component", () => {
  beforeEach(() => {
    mockHook.mockReturnValue({
      ...jest.requireActual("../../../../hooks/useAppRouter"),
      back: mockBackfn,
    });
  });
  it("장소관리 헤더 컴포넌트에는 '장소 관리'라는 문구가 노출되어야 한다.", () => {
    render(<Header />);
    expect(
      screen.getByRole("heading", { level: 1, name: "장소 관리" })
    ).toBeInTheDocument();
  });

  it("장소관리 헤더 컴포넌트에는 '편집'이라는 문구가 노출되어야 한다.", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: "편집" })).toBeInTheDocument();
  });

  it("뒤로가기 버튼을 누르면 router의 back 함수가 호출되어야 한다.", async () => {
    render(<Header />);
    const backButton = screen.getByLabelText("뒤로가기 버튼");

    await waitFor(() => {
      userEvent.click(backButton);
      expect(mockBackfn).toHaveBeenCalled();
    });
  });
});
