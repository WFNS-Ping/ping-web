import { render, screen } from "@testing-library/react";
import OnboardingBadge from "./OnboardingBadge";
describe("OnboardingBadge Component", () => {
  it("Props로 전달된 두 개의 값이 정상적으로 출력 되어야 한다.", () => {
    render(<OnboardingBadge currentStep={2} totalStep={4} />);

    const current = screen.getByLabelText("현재 단계");
    const total = screen.getByLabelText("총 단계");

    expect(current).toBeInTheDocument();
    expect(total).toBeInTheDocument();
  });
});
