import React from "react";
import img1 from "../../../public/image 19 (2).png";
import Image from "next/image";
import SwiperCom from "@/components/swiper";
import { useTranslations } from "next-intl";
const Page = () => {
      const t = useTranslations("news");
  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 mt-10 mb-[150px]">
        <Image className="w-full rounded-lg shadow-lg" src={img1} alt="" />
        <h1 className="text-center text-5xl lg:text-6xl font-semibold mt-10 mb-8">
          Ведущая торгово-дистрибьюторская компания
        </h1>

        <div className="max-w-4xl mx-auto leading-relaxed space-y-6 text-base lg:text-lg">
          <p>
            <span className="font-semibold">О компании</span>
            <br />
            КАПИТАЛ-Т» - Одна из крупнейших дистрибьюторских компаний на
            территории Республики Таджикистан, занимающаяся оптовой торговлей и
            дистрибуцией продуктов питания, парфюмерии и косметики, средств
            гигиены и др.
          </p>
          <p>
            С 2000 года компания ООО «КАПИТАЛ-Т» начала динамично развиваться,
            налаживаются новые партнерские взаимоотношения, растет число
            клиентов, улучшается материально-техническая база компании,
            совершенствуется программное обеспечение.
          </p>
          <p>
            В Компании регулярно проводится большая работа по расширению
            географии продаж, с целью покрытия отдаленных и труднодоступных
            районов республики. Меняется организационная структура, активно
            развивается оптовое и розничное направление продаж, происходит
            оптимизация работы в структуре отделов продаж и логистики.
            Улучшается качество дистрибуции, что подтверждается лидирующими
            позициями на рынке.
          </p>
          <p className="font-semibold">Ценности</p>
          <p>
            Стремление к качественному обслуживанию, укрепление доверия клиентов
            и постоянное развитие. Мы гордимся своей репутацией лидера и
            надежного партнёра, который способствует доступности лучших товаров
            для бизнеса и населения Таджикистана.
          </p>
          <p className="font-semibold">Цели</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Открытие РЦБ в ГБАО</li>
            <li>Расширение портфеля</li>
            <li>Улучшить сервис обслуживания</li>
          </ol>
        </div>
      </section>

          <section className="mb-[200px]">
      <SwiperCom p1={t("a33")} p2={t("a34")} p3={t("a35")} />
          </section>
    </div>
  );
};

export default Page;
