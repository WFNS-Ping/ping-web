import { cn } from "@/utils/cn";
import React from "react";
import { StarIcon } from "@/assets/icons";
import Image from "next/image";
import BottomSheetBase from "../BottomSheetBase";
import rgbDataURL from "@/utils/rgbDataURL";
import PlaceInfo from "../PlaceInfo";
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
        <PlaceInfo
          placeName={placeName}
          placeType={placeType}
          address={address}
          distance={distance}
          iconType="bookmark"
          bookMarkButtonOnClick={() => {}}
        >
          <PlaceInfo.PlaceName />
          <PlaceInfo.PlaceTypeAndDistance />
          <PlaceInfo.Address />
        </PlaceInfo>
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
