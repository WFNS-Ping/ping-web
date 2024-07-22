"use client";
import Link from "next/link";
import PasswordInput from "@/components/PasswordInput";
import { ChangeEvent, useState } from "react";
import Checkbox from "@/components/Checkbox";
import useModal from "@/hooks/useModal";
import ExampleModal from "@/components/ModalBase/ExampleModal";
import PlaceResultBottomSheet from "@/components/PlaceResultBottomSheet";
import TimePicker from "@/components/TimePicker/TimePicker";
export default function Home() {
  const { openModal } = useModal(ExampleModal);
  const [first, setFirst] = useState("");
  const [checked, setChecked] = useState(false);
  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setFirst(e.target.value);
  };
  const mockProps = {
    placeName: "다이소 영등포역점",
    placeType: "종합생활용품",
    distance: 350,
    address: "서울 영등포구 영중로 18",
  };
  return (
    <main className="bg-black-50 scrollbar-hide h-full">
      <h1>Home</h1>

      <PasswordInput
        value={first}
        name="name"
        onChange={change}
        placeholder=""
      />
      <Link href="/about">About</Link>
      <div className="bg-black-950">
        <Checkbox
          label="필수 값"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </div>
      <button onClick={() => setChecked(true)}>모달 열기</button>

      <PlaceResultBottomSheet
        {...mockProps}
        open={checked}
        setOpen={() => {
          setChecked(false);
        }}
        pictures={[
          "https://m.segye.com/content/image/2022/05/23/20220523519355.jpg",
          "https://health.chosun.com/site/data/img_dir/2024/02/20/2024022002560_0.jpg",
        ]}
      />
      <TimePicker />
    </main>
  );
}
