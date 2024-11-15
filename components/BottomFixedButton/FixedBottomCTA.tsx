"use client";
import { ComponentProps, ComponentType } from "react";
import { GlobalPortal } from "../GlobalPortal/GlobalPortal";
import Button from "../Button";
import { cn } from "@/utils/cn";

type TypeAProps = ComponentProps<typeof Button>;
function TypeA(props: TypeAProps) {
  return (
    <GlobalPortal.Consumer>
      <div
        data-testid="button_location_elem"
        className={cn("fixed", "w-full", "left-0", "bottom-0")}
      >
        <div className={cn("px-4")}>
          <Button {...props} />
        </div>
      </div>
    </GlobalPortal.Consumer>
  );
}

type TypeBProps = {
  leftButton: React.ReactNode;
  rightButton: React.ReactNode;
};
function TypeB({ leftButton, rightButton }: TypeBProps) {
  return (
    <GlobalPortal.Consumer>
      <div
        data-testid="two_button_location_elem"
        className={cn("fixed", "w-full", "left-0", "bottom-0")}
      >
        <div className={cn("py-4", "px-10", "flex", "justify-between")}>
          {leftButton}
          {rightButton}
        </div>
      </div>
    </GlobalPortal.Consumer>
  );
}

const FixedBottomCTA = TypeA as ComponentType<TypeAProps> & {
  TypeB: ComponentType<TypeBProps>;
};
FixedBottomCTA.TypeB = TypeB;

export default FixedBottomCTA;
