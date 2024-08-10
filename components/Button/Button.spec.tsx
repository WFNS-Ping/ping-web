import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("버튼 컴포넌트가 정상적으로 렌더링 되어야 한다.", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("버튼에 기본 속성이 정상적으로 반영되어야 한다.", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("px-4 py-4 shadow-normal w-full font-bold");
    expect(button).toHaveClass(
      "bg-black-50 border border-black-200 rounded-full text-black-950 disabled:text-black-200"
    );
  });

  it("size prop으로 전달할 때 그에 맞는 스타일이 반영되어야 한다.", () => {
    render(<Button size="small">Click Me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass(
      "py-[0.6875rem] px-6 caption shadow-small w-full font-bold"
    );
  });

  it("bgColor prop으로 전달할 때 그에 맞는 스타일이 반영되어야 한다.", () => {
    render(<Button bgColor="black">Click Me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass(
      "bg-black-950 rounded-full text-black-50 disabled:text-black-800"
    );
  });

  it("추가 Props가 올바르게 전달 되어야 한다.", () => {
    render(<Button aria-label="custom-button">Click Me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label", "custom-button");
  });
});
