import { render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";
import userEvent from "@testing-library/user-event";
const mockHandleChange = jest.fn();
describe("Checkbox", () => {
  it("올바른 라벨과 Checkbox 컴포넌트가 렌더링되어야 한다", () => {
    render(
      <Checkbox checked={false} onChange={mockHandleChange}>
        <span>체크박스</span>
      </Checkbox>,
    );

    expect(screen.getByText("체크박스")).toBeInTheDocument();
  });

  it("체크가 된다면 체크 표시가 정상적으로 출력 되어야 한다.", () => {
    render(
      <Checkbox checked={true} onChange={mockHandleChange}>
        <span>체크박스</span>
      </Checkbox>,
    );

    const checkIcon = screen.getByTestId("checkbox-icon");
    expect(checkIcon).toBeInTheDocument();
  });

  it("onChangeProp으로 전달된 이벤트가 정상적으로 호출 되어야 한다.", async () => {
    render(
      <Checkbox checked={false} onChange={mockHandleChange}>
        <span>체크박스</span>
      </Checkbox>,
    );
    const checkbox = screen.getByText("체크박스");

    await userEvent.click(checkbox);
    expect(mockHandleChange).toHaveBeenCalled();
  });

  it("'checkboxWrapperClassName' prop으로 전달된 class가 잘 반영 되어야 한다.", () => {
    const testClass = "testClass";
    render(
      <Checkbox
        checked={false}
        onChange={mockHandleChange}
        checkboxWrapperClassName={testClass}
      >
        <span>체크박스</span>
      </Checkbox>,
    );
    const checkboxWrapperElement = screen.getByTestId("checkbox-ui");
    expect(checkboxWrapperElement).toHaveClass(testClass);
  });
});
