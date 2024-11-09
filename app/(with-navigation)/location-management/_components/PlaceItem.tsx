"use client";
import Checkbox from "@/components/Checkbox";
import PlaceInfo from "@/components/PlaceInfo";
import { cn } from "@/utils/cn";
import { useState } from "react";

type PlaceItemProps = {
  placeName: string;
  placeType: string;
  distance: number;
  address: string;
};

const PlaceItem = (props: PlaceItemProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <li className={cn("p-4", "list-none", "border-b", "border-black-100")}>
      <Checkbox
        colorType="gray"
        checked={checked}
        onChange={() => setChecked(!checked)}
        checkboxWrapperClassName="mt-1"
      >
        <div className="flex-1">
          <PlaceInfo iconType="none" isBrand={true} {...props}>
            <PlaceInfo.PlaceName />
            <PlaceInfo.PlaceTypeAndDistance />
            <PlaceInfo.Address />
          </PlaceInfo>
        </div>
      </Checkbox>
    </li>
  );
};

export default PlaceItem;
