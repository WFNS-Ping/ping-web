import { BookMarkIcon, PhoneIcon } from "@/assets/icons";
import { cn } from "@/utils/cn";
import rgbDataURL from "@/utils/rgbDataURL";
import Image from "next/image";

const Page = ({ params }: { params: { id: string } }) => {
  const pictures = [
    "https://m.segye.com/content/image/2022/05/23/20220523519355.jpg",
    "https://health.chosun.com/site/data/img_dir/2024/02/20/2024022002560_0.jpg",
  ];

  return (
    <main className={cn("flex", "flex-col", "gap-y-2")}>
      <header className={cn("relative")}>
        <h1 className={cn("body1", "font-bold", "text-center")}>
          다이소 영등포역점{params.id}
        </h1>
        <BookMarkIcon
          className={cn("absolute", "right-0", "top-0", "translate-y-[25%]")}
          role="button"
        />
        <div className="flex justify-center">
          <span className={cn("text-black-400", "text-xs", "mt-2")}>
            종합생활용품 | 350m
          </span>
        </div>
      </header>

      <ul className={cn("mt-2", "grid", "grid-cols-2", "gap-x-2")}>
        {pictures.map((picture) => (
          <li
            className={cn(
              "h-[9.875rem]",
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
      <p className={cn("description")}>서울 영등포구 영중로 18</p>
      <p className={cn("description")}>매일 10:00 - 22:00</p>
      <p className={cn("description")}>https://linktr.ee/daisokr</p>
      <div className="flex gap-x-2 items-center">
        <PhoneIcon aria-hidden="true" focusable="false" />{" "}
        <span className={cn("description")}>1522-4400</span>
      </div>
    </main>
  );
};

export default Page;
