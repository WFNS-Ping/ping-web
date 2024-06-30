import { cn } from "@/utils/cn";
import React from "react";
import { StarIcon } from "@/assets/icons";
import Image from "next/image";
import BottomSheetBase from "../BottomSheetBase";
import rgbDataURL from "@/utils/rgbDataURL";
type Props = {
  placeName: string;
  placeType: string;
  distance: number;
  address: string;
  pictures?: string[];
  open: boolean;
  setOpen: (isOpen: boolean) => void;
};

const PlaceResultBottomSheet = ({
  placeName,
  placeType,
  pictures,
  address,
  distance,
  open,
  setOpen,
}: Props) => {
  return (
    <BottomSheetBase open={open} setOpen={setOpen}>
      <div>
        <div className={cn("flex", "justify-between")}>
          <h2 className={cn("body1", "font-bold")} aria-label="placeName">
            {placeName}
          </h2>
          <StarIcon
            width="1.5rem"
            height="1.5rem"
            fill="none"
            aria-label="즐겨찾기 버튼"
            role="button"
          />
        </div>
        <div className={cn("text-black-400", "caption")}>
          <span aria-label="placeType">{placeType}</span> |{" "}
          <span aria-label="distance">{distance}m</span>
        </div>
        <h3 className="text-black-950 description">{address}</h3>

        {pictures && (
          <ul className={cn("mt-2", "grid", "grid-cols-2", "gap-x-2")}>
            {pictures.map((picture) => (
              <li
                className={cn(
                  "h-[6.25rem]",
                  "rounded-lg",
                  "overflow-hidden",
                  "relative"
                )}
                key={picture}
              >
                <Image
                  src={picture}
                  alt={picture}
                  placeholder="blur"
                  quality={100}
                  fill={true}
                  sizes="100%"
                  blurDataURL={rgbDataURL(231, 231, 231)}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </BottomSheetBase>
  );
};

export default PlaceResultBottomSheet;
