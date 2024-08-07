"use client";
import PlaceInfo from "@/components/PlaceInfo";
type PlaceItemProps = {
  placeName: string;
  placeType: string;
  distance: number;
  address: string;
};

const PlaceItem = (props: PlaceItemProps) => {
  return (
    <li className="p-4 list-none border-b border-black-100">
      <PlaceInfo iconType="star" starButtonOnClick={() => {}} {...props}>
        <PlaceInfo.PlaceName />
        <PlaceInfo.PlaceTypeAndDistance />
        <PlaceInfo.Address />
      </PlaceInfo>
    </li>
  );
};

export default PlaceItem;
