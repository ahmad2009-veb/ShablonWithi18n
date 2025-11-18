import { useTranslations } from "next-intl";
import React from "react";
import img1 from "../../../public/image 19 (1).png"
import Image from "next/image";
import SwiperCom from "@/components/swiper";
const Page = () => {
  const t = useTranslations("news");
  return (
    <div>
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16 p-6 lg:p-12 bg-gray-900 rounded-xl">
        {" "}
        <section className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("b1")}
          </h1>
          <p className="text-gray-300 mb-2">{t("b2")}</p>
          <p className="text-gray-300 mb-2">{t("b3")}</p>
          <p className="text-gray-300 mb-4">{t("b4")}</p>
          <button className="bg-yellow-400 text-gray-900 font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500 transition">
            {t("b5")}
          </button>
        </section>
        <Image
          src={img1}
          alt=""
          className="w-full lg:w-1/2 rounded-lg object-cover shadow-lg"
        />
          </section>
          <section className="mt-[100px]">
      <SwiperCom p1={t("a33")} p2={t("a34")} p3={t("a35")} />
          </section>
          <section className="mt-[100px] mb-[200px]">
      <SwiperCom p1={t("a33")} p2={t("a34")} p3={t("a35")} />
          </section>
    </div>
  );
};

export default Page;
