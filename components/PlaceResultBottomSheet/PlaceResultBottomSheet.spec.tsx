import { render, screen } from "@testing-library/react";
import PlaceResultBottomSheet from "./PlaceResultBottomSheet";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

const mockProps = {
  placeName: "다이소 영등포역점",
  placeType: "종합생활용품",
  distance: 350,
  address: "서울 영등포구 영중로 18",
  open: true,
  setOpen: jest.fn(),
};
describe.skip("PlaceResultBottomSheet Component", () => {
  it("장소 결과 컴포넌트는 '장소 이름', '장소 타입', '거리', '주소', '즐겨찾기 버튼'이 있어야 한다.", () => {
    render(<PlaceResultBottomSheet {...mockProps} />);

    const placeName = screen.getByLabelText("placeName");
    const placeType = screen.getByLabelText("placeType");
    const distance = screen.getByLabelText("distance");
    const starButton = screen.getByLabelText("북마크 버튼");

    expect(placeName).toBeInTheDocument();
    expect(placeType).toBeInTheDocument();
    expect(distance).toBeInTheDocument();
    expect(starButton).toBeInTheDocument();
  });

  it("사진이 없다면 사진 영역이 노출되지 않는다.", () => {
    render(<PlaceResultBottomSheet {...mockProps} />);

    const pictures = screen.queryByRole("listitem");
    expect(pictures).toBe(null);
  });

  it("사진이 있다면 사진 영역이 노출된다.", async () => {
    render(<PlaceResultBottomSheet {...mockProps} pictures={["textImage"]} />);

    const pictures = await screen.findAllByRole("img");
    expect(pictures.length).toBeGreaterThan(0);
  });
});
