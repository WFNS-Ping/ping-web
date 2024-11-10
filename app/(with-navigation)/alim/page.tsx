import { CogIcon } from "@/assets/icons";
import React from "react";
import AlimList from "./_components/AlimList";

const page = () => {
  return (
    <>
      <header className="flex justify-between items-center px-4">
        <h1 className="body1 font-bold py-2">알림 설정</h1>
        <button type="button">
          <CogIcon aria-hidden="true" focusable="false" />
        </button>
      </header>
      <section className="grow pb-2 overflow-scroll scrollbar-hide">
        <AlimList />
      </section>
    </>
  );
};

export default page;
