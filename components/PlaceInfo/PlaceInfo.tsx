"use client";
import { cn } from "@/utils/cn";
import { PropsWithChildren, createContext, useContext } from "react";
import { StarIcon, BookMarkIcon } from "@/assets/icons";

type PlaceInfoContext = {
  placeName: string;
  placeType: string;
  distance: number;
  address: string;
  isBrand: boolean;
} & (StarProps | BookmarkProps | NoneIconProps);

type StarProps = {
  iconType: "star";
  isStared: boolean;
  starButtonOnClick: () => void;
};

type BookmarkProps = {
  iconType: "bookmark";
  bookMarkButtonOnClick: () => void;
};

type NoneIconProps = {
  iconType: "none";
};

type PlaceInfoProps = PropsWithChildren & PlaceInfoContext;
const PlaceInfoContext = createContext<PlaceInfoContext | undefined>(undefined);

const usePlaceInfoContext = () => {
  const context = useContext(PlaceInfoContext);
  if (!context) {
    throw new Error("usePlaceInfoContext must be within a Search Component.");
  }
  return context;
};

function PlaceInfo(props: PlaceInfoProps) {
  const { children, ...rest } = props;
  return (
    <PlaceInfoContext.Provider value={{ ...rest }}>
      {children}
    </PlaceInfoContext.Provider>
  );
}

PlaceInfo.PlaceName = function PlaceName() {
  const contextValue = usePlaceInfoContext();

  return (
    <div className="flex justify-between">
      <h2
        className={cn("body1", "font-bold", "flex", "items-center", "gap-x-1")}
        aria-label="placeName"
      >
        {contextValue.placeName}
        {contextValue.isBrand && <BrandChip />}
      </h2>
      {contextValue.iconType === "bookmark" && (
        <BookMarkIcon
          width="1.5rem"
          height="1.5rem"
          fill="none"
          aria-label="북마크 버튼"
          role="button"
          onClick={contextValue.bookMarkButtonOnClick}
        />
      )}
      {contextValue.iconType === "star" && (
        <StarIcon
          width="1.5rem"
          height="1.5rem"
          fill={contextValue.isStared ? "#FFE80B" : "none"}
          aria-label="즐겨찾기 버튼"
          role="button"
          onClick={contextValue.starButtonOnClick}
        />
      )}
    </div>
  );
};

PlaceInfo.PlaceTypeAndDistance = function PlaceTypeAndDistance() {
  const { placeType, distance } = usePlaceInfoContext();

  return (
    <div className={cn("text-black-400", "caption")}>
      <span className="after:content-['|'] after:mx-2" aria-label="placeType">
        {placeType}
      </span>
      <span aria-label="distance">{distance}m</span>
    </div>
  );
};

PlaceInfo.Address = function Address() {
  const { address } = usePlaceInfoContext();

  return <h3 className="text-black-950 description">{address}</h3>;
};

function BrandChip() {
  return (
    <span
      data-testid="brand-chip"
      className={cn(
        "bg-blue-600",
        "border-[0.5px]",
        "border-blue-600",
        "rounded-[0.3125rem]",
        "text-2xs",
        "text-white",
        "px-[0.3125rem]"
      )}
    >
      B
    </span>
  );
}

export default PlaceInfo;
