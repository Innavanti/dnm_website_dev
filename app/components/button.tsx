import Link from "next/link";
import { ArrowRightUp } from "./icons/icons";

export const Button = ({ link, text }: { link: string; text: string }) => {
  return (
    <div className="group bottom-10 z-10 flex">
      <Link
        href={link}
        className="flex flex-row gap-3 bg-black group-hover:bg-primary2-500 mt-auto px-10 py-5 border-2 border-primary2-500 rounded-xl duration-500"
      >
        <span className="my-auto">{text}</span>
        <ArrowRightUp
          strokeWidth={4}
          className="my-auto group-hover:-translate-y-2 group-hover:translate-x-2 duration-500"
          size={15}
        />
      </Link>
    </div>
  );
};
