"use client";
import useKakaoLoader from "@/hooks/useKaKaoLoader";
import React from "react";
import { Map } from "react-kakao-maps-sdk";
import { SearchIcon } from "@/assets/icons";
import { cn } from "@/utils/cn";
import useAppRouter from "@/hooks/useAppRouter";

const MapPage = () => {
  useKakaoLoader();
  const router = useAppRouter();
  return (
    <section className="relative w-full h-full p-0">
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "100%",
        }}
        level={3} // 지도의 확대 레벨
      />
      <div className="px-2 absolute top-2 z-10 w-full">
        <button
          className={cn(
            "input-base",
            "px-6",
            "py-4",
            "w-full",
            "description",
            "font-normal",
            "text-black-200",
            "text-left",
            "bg-white",
            "shadow-[0px_2px_2px_0px_rgba(0,0,0,0.2)]",
            "active:text-black-100"
          )}
          type="button"
          onClick={() => router.push("/search")}
        >
          Ping 찍을 곳 검색
          <SearchIcon
            aria-label="search-button"
            role="button"
            width="1.5rem"
            height="1.5rem"
            className={cn("absolute", "top-4", "right-6", "text-black-950")}
          />
        </button>
      </div>
    </section>
  );
};

export default MapPage;
