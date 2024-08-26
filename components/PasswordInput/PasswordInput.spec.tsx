import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import PasswordInput from "./PasswordInput";

const mockHandleChange = jest.fn();
describe("PasswordInput", () => {
  describe("기본적으로", () => {
    beforeEach(() => {
      render(
        <PasswordInput
          name="username"
          placeholder="passwordInput"
          onChange={mockHandleChange}
          value=""
          showPasswordCheck
        />
      );
    });
    it("PasswordInput 컴포넌트가 잘 렌더링 되어야 한다.", () => {
      expect(screen.getByPlaceholderText("passwordInput")).toBeInTheDocument();
    });

    it("Password가 보여질 수 있는 버튼이 보여야 한다.", () => {
      expect(screen.getByLabelText("show-password-button")).toBeInTheDocument();
    });

    it("타입이 password 상태에서 아이콘 클릭 시 내가 입력한 값이 보여야 한다.", async () => {
      const input = screen.getByPlaceholderText(
        "passwordInput"
      ) as HTMLInputElement;
      const button = screen.getByLabelText("show-password-button");
      userEvent.type(input, "password");

      await userEvent.click(button);
      expect(input.type).toBe("text");
    });
    it("비밀번호의 정규식을 체크하는 체크박스가 보여야 한다.", async () => {
      const checkboxIcon = screen.getAllByTestId("checkbox-icon");
      expect(checkboxIcon.length).toBe(4);
    });
  });
  describe("정규식 체크", () => {
    describe("영문 체크", () => {
      it("영문이 입력이 안될 경우 영문 체크 표시가 비활성화 되어야 한다.", () => {
        render(
          <PasswordInput
            name="username"
            placeholder="passwordInput"
            onChange={mockHandleChange}
            value="헬로월드"
            showPasswordCheck
          />
        );

        const checkboxIcon = screen.getAllByTestId("checkbox-icon");
        expect(checkboxIcon[0]).toHaveClass("text-black-200");
      });
      it("영문이 입력되었을 경우 영문 체크 표시가 활성화 되어야 한다.", () => {
        render(
          <PasswordInput
            name="username"
            placeholder="passwordInput"
            onChange={mockHandleChange}
            value="hello world!"
            showPasswordCheck
          />
        );

        const checkboxIcon = screen.getAllByTestId("checkbox-icon");
        expect(checkboxIcon[0]).toHaveClass("text-blue-600");
      });
    });

    describe("숫자 체크", () => {
      it("숫자가 입력이 안될 경우 숫자 체크 표시가 비활성화 되어야 한다.", () => {
        render(
          <PasswordInput
            name="username"
            placeholder="passwordInput"
            onChange={mockHandleChange}
            value="헬로월드helloWorld!"
            showPasswordCheck
          />
        );

        const checkboxIcon = screen.getAllByTestId("checkbox-icon");
        expect(checkboxIcon[1]).toHaveClass("text-black-200");
      });
      it("숫자가 입력되었을 경우 숫자 체크 표시가 활성화 되어야 한다.", () => {
        render(
          <PasswordInput
            name="username"
            placeholder="passwordInput"
            onChange={mockHandleChange}
            value="helloworld!1"
            showPasswordCheck
          />
        );

        const checkboxIcon = screen.getAllByTestId("checkbox-icon");
        expect(checkboxIcon[1]).toHaveClass("text-blue-600");
      });
    });

    describe("특수문자 체크", () => {
      it("특수문자가 입력이 안될 경우 특수문자 체크 표시가 비활성화 되어야 한다.", () => {
        render(
          <PasswordInput
            name="username"
            placeholder="passwordInput"
            onChange={mockHandleChange}
            value="헬로월드helloWorld12"
            showPasswordCheck
          />
        );

        const checkboxIcon = screen.getAllByTestId("checkbox-icon");
        expect(checkboxIcon[2]).toHaveClass("text-black-200");
      });
      it("특수문자가 입력되었을 경우 특수문자 체크 표시가 활성화 되어야 한다.", () => {
        render(
          <PasswordInput
            name="username"
            placeholder="passwordInput"
            onChange={mockHandleChange}
            value="헬로월드helloWorld12!"
            showPasswordCheck
          />
        );

        const checkboxIcon = screen.getAllByTestId("checkbox-icon");
        expect(checkboxIcon[2]).toHaveClass("text-blue-600");
      });
    });

    describe("글자수 체크", () => {
      it("글자수가 10자 이상 입력이 안될 경우 글자수 체크 표시가 비활성화 되어야 한다.", () => {
        render(
          <PasswordInput
            name="username"
            placeholder="passwordInput"
            onChange={mockHandleChange}
            value="oWorld12@"
            showPasswordCheck
          />
        );

        const checkboxIcon = screen.getAllByTestId("checkbox-icon");
        expect(checkboxIcon[3]).toHaveClass("text-black-200");
      });
      it("글자수가 10자 이상 입력되었을 경우 글자수 체크 표시가 활성화 되어야 한다.", () => {
        render(
          <PasswordInput
            name="username"
            placeholder="passwordInput"
            onChange={mockHandleChange}
            value="oWorld12!@#"
            showPasswordCheck
          />
        );

        const checkboxIcon = screen.getAllByTestId("checkbox-icon");
        expect(checkboxIcon[3]).toHaveClass("text-blue-600");
      });
    });
  });
});
