import { render, screen } from "@testing-library/react";
import Input from "./Input";
const mockHandleChange = jest.fn();
describe("Input Component", () => {
  it("올바른 라벨과 플레이스홀더로 Input 컴포넌트를 렌더링되어야 한다", () => {
    render(
      <Input
        type="text"
        value=""
        name="username"
        placeholder="placeholder"
        onChange={mockHandleChange}
      />
    );

    expect(screen.getByPlaceholderText("placeholder")).toBeInTheDocument();
  });

  it("올바른 타입과 값으로 Input 컴포넌트를 렌더링되어야 한다", () => {
    render(
      <Input
        type="email"
        value="test@example.com"
        name="email"
        placeholder="Enter your email"
        onChange={mockHandleChange}
      />
    );

    const inputElement = screen.getByPlaceholderText(
      "Enter your email"
    ) as HTMLInputElement;
    expect(inputElement.type).toBe("email");
    expect(inputElement.value).toBe("test@example.com");
  });

  it("비활성화된 Input 컴포넌트를 렌더링되어야 한다", () => {
    render(
      <Input
        type="text"
        value=""
        name="disabledInput"
        placeholder="This is disabled"
        disabled={true}
        onChange={mockHandleChange}
      />
    );

    const inputElement = screen.getByPlaceholderText(
      "This is disabled"
    ) as HTMLInputElement;
    expect(inputElement).toBeDisabled();
  });
});
