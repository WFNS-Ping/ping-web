import React from "react";
import { render, screen } from "@testing-library/react";
import Radio from "./Radio";
import { useRadioGroupContext } from "../RadioGroup/RadioGroup";

jest.mock("../RadioGroup/RadioGroup", () => ({
  useRadioGroupContext: jest.fn(),
}));

describe("Radio", () => {
  const mockOnChange = jest.fn();
  const mockContextValue = "testValue";

  beforeEach(() => {
    (useRadioGroupContext as jest.Mock).mockReturnValue({
      onChange: mockOnChange,
      value: mockContextValue,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("라디오 컴포넌트가 올바르게 렌더링 되어야 한다.", () => {
    render(
      <Radio id="test-radio" value="testValue">
        Test Radio
      </Radio>
    );

    expect(screen.getByText("Test Radio")).toBeInTheDocument();
  });

  it("contextValue가 value와 일치할 때 입력이 체크 되어야 한다.", () => {
    render(
      <Radio id="test-radio" value="testValue">
        Test Radio
      </Radio>
    );

    const input = screen.getByRole("radio");
    expect(input).toBeChecked();
  });

  it("isChecked가 true라면 백그라운드 색상이 정해져야 한다.", () => {
    render(
      <Radio id="test-radio" value="testValue">
        Test Radio
      </Radio>
    );

    const listItem = screen.getByRole("listitem");
    expect(listItem).toHaveClass("bg-blue-600");
  });

  it("isChecked가 false라면 백그라운드 색상이 없어야 한다", () => {
    render(
      <Radio id="test-radio" value="test">
        Test Radio
      </Radio>
    );
    const listItem = screen.getByRole("listitem");
    expect(listItem).toHaveClass("bg-white");
  });
});
