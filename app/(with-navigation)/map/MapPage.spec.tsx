import userEvent from "@testing-library/user-event";
import MapPage from "./page";
import { screen, render } from "@testing-library/react";

jest.mock("react-kakao-maps-sdk", () => ({
  Map: () => <div data-testid="kakaoMap" />,
}));

jest.mock("../../../hooks/useKaKaoLoader", () => jest.fn());
const mockPushfn = jest.fn();
jest.mock("../../../hooks/useAppRouter", () => {
  return jest.fn().mockImplementation(() => {
    return {
      ...jest.requireActual("../../../hooks/useKaKaoLoader"),
      push: mockPushfn,
    };
  });
});
describe("MapPage", () => {
  beforeEach(() => {
    render(<MapPage />);
  });
  it("카카오 맵이 띄워져야 한다.", () => {
    const map = screen.getByTestId("kakaoMap");
    expect(map).toBeInTheDocument();
  });

  it("검색 버튼이 있어야 한다.", () => {
    const button = screen.getByRole("button", { name: "Ping 찍을 곳 검색" });
    expect(button).toBeInTheDocument();
  });

  it("검색 버튼 클릭 시 검색 페이지로 이동되어야 한다.", async () => {
    const button = screen.getByRole("button", { name: "Ping 찍을 곳 검색" });
    await userEvent.click(button);

    expect(mockPushfn).toHaveBeenCalledWith("/search");
  });
});
