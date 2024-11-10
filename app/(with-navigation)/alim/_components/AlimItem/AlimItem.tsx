/* eslint-disable react/no-unescaped-entities */
import { LocationMarkerIcon } from "@/assets/icons";
import { cn } from "@/utils/cn";

type Props = {
  content: string;
};

const AlimItem = ({ content }: Props) => {
  return (
    <li
      className={cn(
        "px-2",
        "py-4",
        "flex",
        "border-b",
        "rounded",
        "border-black-200",
        "items-center"
      )}
    >
      <LocationMarkerIcon
        className="text-blue-600"
        aria-hidden="true"
        focusable="false"
      />
      <p className="description ml-2 grow">{content}</p>
    </li>
  );
};

export default AlimItem;
