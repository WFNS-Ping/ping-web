import React from "react";
import { render, screen } from "@testing-library/react";
import PlaceInfo from "./PlaceInfo";
import userEvent from "@testing-library/user-event";

const mockStarButtonOnClick = jest.fn();
const mockBookMarkButtonOnClick = jest.fn();
describe("PlaceInfo", () => {
  const placeInfoProps = {
    placeName: "Test Place",
    placeType: "Restaurant",
    distance: 500,
    address: "123 Test St",
    iconType: "star" as "star",
    starButtonOnClick: mockStarButtonOnClick,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("PlaceName 컴포넌트가 정상적으로 렌더링 되어야 한다.", () => {
    render(
      <PlaceInfo {...placeInfoProps}>
        <PlaceInfo.PlaceName />
      </PlaceInfo>
    );

    expect(screen.getByLabelText("placeName")).toHaveTextContent("Test Place");
    expect(screen.getByLabelText("즐겨찾기 버튼")).toBeInTheDocument();
  });

  it("PlaceTypeAndDistance 컴포넌트가 정상적으로 렌더링 되어야 한다.", () => {
    render(
      <PlaceInfo {...placeInfoProps}>
        <PlaceInfo.PlaceTypeAndDistance />
      </PlaceInfo>
    );

    expect(screen.getByLabelText("placeType")).toHaveTextContent("Restaurant");
    expect(screen.getByLabelText("distance")).toHaveTextContent("500m");
  });

  it("Address 컴포넌트가 정상적으로 렌더링 되어야 한다.", () => {
    render(
      <PlaceInfo {...placeInfoProps}>
        <PlaceInfo.Address />
      </PlaceInfo>
    );

    expect(screen.getByText("123 Test St")).toBeInTheDocument();
  });

  it("StarIcon을 클릭하면 starButtonOnClick 함수가 정상적으로 호출 되어야 한다.", async () => {
    render(
      <PlaceInfo {...placeInfoProps}>
        <PlaceInfo.PlaceName />
      </PlaceInfo>
    );

    const starButton = screen.getByLabelText("즐겨찾기 버튼");
    await userEvent.click(starButton);

    expect(mockStarButtonOnClick).toHaveBeenCalled();
    expect(mockBookMarkButtonOnClick).not.toHaveBeenCalled();
  });

  describe("icon type이 bookmark 일 때", () => {
    const bookmarkProps = {
      ...placeInfoProps,
      iconType: "bookmark" as "bookmark",
      bookMarkButtonOnClick: mockBookMarkButtonOnClick,
    };

    beforeEach(() => {
      render(
        <PlaceInfo {...bookmarkProps}>
          <PlaceInfo.PlaceName />
        </PlaceInfo>
      );
    });

    it("북마크 아이콘이 정상적으로 렌더링 되어야 한다.", () => {
      expect(screen.getByLabelText("북마크 버튼")).toBeInTheDocument();
    });
    it("북마크 아이콘을 클릭하면 bookMarkButtonOnClick 함수가 정상적으로 호출되어야 한다.", async () => {
      const starButton = screen.getByLabelText("북마크 버튼");
      await userEvent.click(starButton);

      expect(mockBookMarkButtonOnClick).toHaveBeenCalled();
      expect(mockStarButtonOnClick).not.toHaveBeenCalled();
    });
  });
});
