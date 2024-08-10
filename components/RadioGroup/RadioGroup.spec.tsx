import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Radio from "../Radio";
import { RadioGroup } from "./RadioGroup";
import userEvent from "@testing-library/user-event";

describe("RadioGroup", () => {
  const mockOnChange = jest.fn();
  const mockContextValue = "testValue";

  it("라디오 checked를 바꾸면 onChange 함수가 호출되어야 한다.", async () => {
    render(
      <RadioGroup value={mockContextValue} onChange={mockOnChange}>
        <Radio id="test-radio" value="testValue">
          Test Radio
        </Radio>
        <Radio id="test-radio2" value="test">
          Test Radio
        </Radio>
      </RadioGroup>
    );
    await waitFor(() => {
      const radioItem = screen.getAllByRole("radio");

      userEvent.click(radioItem[1]);
      expect(mockOnChange).toHaveBeenCalledWith("test");
    });
  });
});
