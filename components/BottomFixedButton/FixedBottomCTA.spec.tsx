import FixedBottomCTA from "./FixedBottomCTA";
import { screen, render } from "@testing-library/react";
import GlobalPortal from "../GlobalPortal";

const testBtnName = "button";
describe("FixedBottomCTA", () => {
  it("버튼이 html 가장 바닥에 고정되어져 있어야 한다.", () => {
    render(
      <GlobalPortal.Provider>
        <FixedBottomCTA>{testBtnName}</FixedBottomCTA>
      </GlobalPortal.Provider>
    );
    const location = screen.getByTestId("button_location_elem");

    expect(location).toHaveClass("fixed", "bottom-0");
  });
});
