"use client";
import { cn } from "@/utils/cn";
import { useRef } from "react";
import Image from "next/image";
import rgbDataURL from "@/utils/rgbDataURL";
import PlaceInfo from "../PlaceInfo";
import { Sheet, SheetRef } from "react-modal-sheet";
import useAppRouter from "@/hooks/useAppRouter";
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
  const ref = useRef<SheetRef>();
  const snapPoints = [1, 220, 0];
  const router = useAppRouter();
  return (
    <Sheet
      ref={ref}
      snapPoints={snapPoints}
      initialSnap={1}
      isOpen={open}
      onClose={() => setOpen(false)}
      onCloseStart={() => {
        console.log("start");
      }}
      onSnap={(snapIndex) => {
        if (snapIndex === 0) {
          router.push("/location-detail/3");
        }
      }}
    >
      <Sheet.Container className="bg-black-50 px-2 pb-4">
        <Sheet.Header>
          <div className="flex justify-center mt-4 mb-2">
            <button className="h-[5px] w-10 cursor-grab touch-none rounded-lg bg-black-200 active:cursor-grabbing"></button>
          </div>
        </Sheet.Header>
        <Sheet.Content>
          <Sheet.Scroller className="scrollbar-hide">
            <div>
              <PlaceInfo
                isBrand={false}
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
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
};

export default PlaceResultBottomSheet;
