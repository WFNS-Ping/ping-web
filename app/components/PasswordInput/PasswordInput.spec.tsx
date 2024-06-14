import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import PasswordInput from "./PasswordInput";

const mockHandleChange = jest.fn();
describe("PasswordInput", () => {
  describe("기본적으로", () => {
    it.only("PasswordInput 컴포넌트가 잘 렌더링 되어야 한다.", () => {
      render(
        <PasswordInput
          name="username"
          placeholder="passwordInput"
          onChange={mockHandleChange}
        />
      );
      expect(screen.getByPlaceholderText("passwordInput")).toBeInTheDocument();
    });

    it("Password가 보여질 수 있는 버튼이 보여야 한다.", () => {
      render(
        <PasswordInput
          name="username"
          placeholder="placeholder"
          onChange={mockHandleChange}
        />
      );
      expect(screen.getByLabelText("show-password-button")).toBeInTheDocument();
    });
  });
  it("타입이 password 상태에서 아이콘 클릭 시 내가 입력한 값이 보여야 한다.", async () => {
    render(
      <PasswordInput
        name="username"
        placeholder="passwordInput"
        onChange={mockHandleChange}
      />
    );
    const input = screen.getByPlaceholderText(
      "passwordInput"
    ) as HTMLInputElement;
    const button = screen.getByLabelText("show-password-button");
    userEvent.type(input, "password");
    expect(mockHandleChange).toHaveBeenCalledWith("password");

    await userEvent.click(button);
    expect(input.type).toBe("text");
  });
});
