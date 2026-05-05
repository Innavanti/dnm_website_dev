import { useTranslations } from "next-intl";
import {
  Bullseye,
  Compass,
  Crates,
  Layers,
  Target,
  TripleConnection,
} from "../icons/icons";

export const Introduction = () => {
  const t = useTranslations("home.section_introduction");

  const bulletPoints = [
    {
      icon: <Compass strokeWidth={0.2} />,
    },
    {
      icon: <Target strokeWidth={0.2} />,
    },
    {
      icon: <Layers strokeWidth={0.2} />,
    },
  ];
  return (
    <section className="relative flex flex-col justify-around items-center gap-7 xl:gap-9 bg-black mx-auto px-5 py-20 w-full h-full">
      {/* ---------- Title ----------   */}
      <div className="flex flex-col gap-7 md:mr-auto w-full md:w-2/3 lg:w-2/5 text-white">
        <h2 className="font-semibold text-5xl">
          <span>{t("title.0")}</span>
          <span className="text-primary2-500">{t("title.1")} </span>
          <span>{t("title.2")}</span>
        </h2>
        <p className="text-xl">{t("paragraph1")}</p>
        <p className="text-xl">{t("paragraph2")}</p>
      </div>

      {/* ---------- Decorative divisor ----------   */}
      <div className="bg-primary2-500/30 mr-auto w-1/2 h-0.5"></div>

      {/* ----------  Bullet Points ----------   */}
      <div className="flex lg:flex-row flex-col gap-10 mb-5 xl:mb-10 w-full h-1/3 text-white">
        {bulletPoints.map(({ icon }, index) => (
          <BulletPoint
            key={`bulletPoint-${index}`}
            icon={icon}
            index={index}
            text={t(`bullet_points.${index}`)}
          />
        ))}
      </div>

      {/* ----------  Quote ----------   */}
      <div className="flex xl:flex-row flex-col xl:justify-center gap-5 w-full lg:w-2/3 font-bold text-2xl lg:text-4xl">
        <p className="w-fit text-neutral2-100">
          <span>{t(`quote1`)}</span>
        </p>
        <p className="ml-auto xl:ml-5 w-fit text-white xl:text-left text-right">
          <span>{t(`quote2.0`)}</span>
          <span className="text-primary2-500">{t(`quote2.1`)}</span>
        </p>
      </div>
    </section>
  );
};

const BulletPoint = ({
  icon,
  index,
  text,
}: {
  icon: any;
  index: number;
  text: string;
}) => {
  const firstSpaceIndex = text.indexOf(" ");

  // Handle cases where the string might be only one word
  if (firstSpaceIndex === -1) {
    return <span className="font-extrabold">{text}</span>;
  }

  const firstWord = text.substring(0, firstSpaceIndex);
  const restOfText = text.substring(firstSpaceIndex);

  return (
    <p className="flex flex-row lg:flex-col gap-6 w-full lg:h-fit">
      <span className="bg-slate-900 p-2 border-2 border-primary2-500 rounded w-fit h-fit">
        {icon}
      </span>
      <span className="my-auto w-full lg:h-fit text-xl lg:text-2xl xl:text-3xl">
        <span className="font-bold">{firstWord}</span>
        {restOfText}
      </span>
    </p>
  );
};
