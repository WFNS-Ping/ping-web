import React from "react";
import Header from "./_components/Header";
import PlaceItem from "./_components/PlaceItem";
import Filters from "./_components/Filters";

const data = Array.from({ length: 5 }, () => ({
  placeName: "다이소 영등포역점",
  placeType: "종합생활용품",
  distance: 350,
  address: "서울 영등포구 영중로 18",
}));

const LocationManagementPage = () => {
  return (
    <main>
      {/* <Header /> */}
      <Filters filterType="distance" />
      {data.map((item, idx) => (
        <PlaceItem key={idx} {...item} />
      ))}
    </main>
  );
};

export default LocationManagementPage;
