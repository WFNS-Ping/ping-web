import { render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";
import userEvent from "@testing-library/user-event";
const mockHandleChange = jest.fn();
describe("Checkbox", () => {
  it("올바른 라벨과 Checkbox 컴포넌트가 렌더링되어야 한다", () => {
    render(
      <Checkbox label="체크박스" checked={false} onChange={mockHandleChange} />
    );

    expect(screen.getByText("체크박스")).toBeInTheDocument();
  });

  it("체크가 된다면 체크 표시가 정상적으로 출력 되어야 한다.", () => {
    render(
      <Checkbox label="체크박스" checked={true} onChange={mockHandleChange} />
    );

    const checkIcon = screen.getByTestId("checkbox-icon");
    expect(checkIcon).toBeInTheDocument();
  });

  it("onChangeProp으로 전달된 이벤트가 정상적으로 호출 되어야 한다.", async () => {
    render(
      <Checkbox label="체크박스" checked={false} onChange={mockHandleChange} />
    );
    const checkbox = screen.getByText("체크박스");

    await userEvent.click(checkbox);
    expect(mockHandleChange).toHaveBeenCalled();
  });
});
