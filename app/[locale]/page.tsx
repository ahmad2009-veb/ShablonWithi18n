import Image from "next/image";
import React from "react";
import img1 from "../../public/unsplash_nbRgZltoOck.png";
import { useTranslations } from "next-intl";
import img2 from "../../public/unsplash_U2BI3GMnSSE.png";
import img3 from "../../public/unsplash_pYlBAu3de0w.png";
import img4 from "../../public/unsplash_nC6CyrVBtkU.png";
import img5 from "../../public/Group 2.png"
import img6 from "../../public/Frame 1261154819.png"
import img7 from "../../public/Frame 1261154823.png"
import img8 from "../../public/Frame 1261154822.png"
import img9 from "../../public/Frame 1261154821.png"
import img10 from "../../public/image 16.png"
import img11 from "../../public/image 19.png"
import {
  BookImage,
  BookOpen,
  Briefcase,
  Clock,
  HandHelping,
  House,
  Map,
  MapPin,
  Shield,
  ShieldUser,
  Truck,
  Users,
  UsersRound,
} from "lucide-react";
import SwiperCom from "@/components/swiper";
import Card from "@/components/card";
const Page = () => {
  const t = useTranslations("home");
  return (
    <div>
      <header>
        <Image className="w-[95%] m-auto" src={img1} alt="" />
        <section className="md:mt-[-530px] text-center">
          <p className="md:text-8xl text-4xl font-bold mb-[50px]">{t("a1")}</p>
          <p className="text-4xl">{t("a2")}</p>
          <section className="flex justify-center gap-[20px] mt-[50px]">
            <button className="w-[170px] h-[45px] rounded-[25px] bg-[#FFA900]">
              {t("a3")}
            </button>
            <button className="w-[170px] h-[45px] rounded-[25px] border-[1px] border-solid border-[#FFA900] text-[#FFA900]">
              {t("a4")}
            </button>
          </section>
          <section className="md:flex justify-center gap-20 mt-[70px] md:ml-0 ml-[10px]">
            <section className="md:flex gap-[10px] md:mb-0 mb-[40px]">
              <p className="text-6xl">9500</p>
              <section className="md:text-start mt-[10px]">
                <p className="text-[14px]">{t("a5")}</p>
                <p className="text-[13px] text-gray-200">{t("a6")}</p>
              </section>
            </section>
            <section className="md:flex gap-[10px]">
              <p className="text-6xl">8250</p>
              <section className="md:text-start mt-[10px]">
                <p className="text-[14px]">{t("a5")}</p>
                <p className="text-[13px] text-gray-200">{t("a6")}</p>
              </section>
            </section>
          </section>
        </section>
      </header>

      <main className="md:mt-[250px] mt-[100px] w-[70%] m-auto">
        <p className="text-4xl font-semibold text-center mb-[15px]">
          {t("a7")}
        </p>
        <p className="text-2xl text-center">{t("a8")}</p>
      </main>

      <section className="min-h-screen bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-amber-500 dark:text-amber-400 md:mb-[50px]">
                  {t("a9")}
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  {t("a10")}
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-amber-500 dark:text-amber-400 md:mb-[50px]">
                  {t("a11")}
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-amber-200 dark:hover:border-amber-900 transition-colors">
                    <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                      <BookOpen className="w-6 h-6 text-gray-900 dark:text-white" />
                    </div>
                    <p className="text-base md:text-lg font-medium text-gray-900 dark:text-white">
                      {t("a12")}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-amber-200 dark:hover:border-amber-900 transition-colors">
                    <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                      <Briefcase className="w-6 h-6 text-gray-900 dark:text-white" />
                    </div>
                    <p className="text-base md:text-lg font-medium text-gray-900 dark:text-white">
                      {t("a13")}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-amber-200 dark:hover:border-amber-900 transition-colors">
                    <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                      <Shield className="w-6 h-6 text-gray-900 dark:text-white" />
                    </div>
                    <p className="text-base md:text-lg font-medium text-gray-900 dark:text-white">
                      {t("a14")}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {t("a15")}
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={img2}
                  alt="Modern office workspace"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={img3}
                    alt="Office workspace"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={img4}
                    alt="Office interior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="dark min-h-screen bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-16 grid gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="relative overflow-hidden rounded-3xl bg-zinc-900/50 p-8 backdrop-blur-sm border border-zinc-800">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800/80">
                    <Clock
                      className="h-7 w-7 text-zinc-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2">
                      {t("a16")}
                    </h2>
                    <p className="text-base text-zinc-400 leading-relaxed">
                      {t("a17")}
                      <br />
                      {t("a172")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative overflow-hidden rounded-3xl bg-zinc-900/50 p-6 backdrop-blur-sm border border-zinc-800">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.03),transparent_50%)]" />
                  <div className="relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/80">
                      <UsersRound
                        className="h-6 w-6 text-zinc-300"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">
                      300
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {t("a18")}
                      <br />
                      {t("a192")}
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl bg-zinc-900/50 p-6 backdrop-blur-sm border border-zinc-800">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.03),transparent_50%)]" />
                  <div className="relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/80">
                      <Truck
                        className="h-6 w-6 text-zinc-300"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="text-4xl font-bold text-white mb-1">
                      100 т +
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {t("a19")}
                      <br />
                      {t("a192")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative overflow-hidden rounded-3xl bg-zinc-900/50 p-8 backdrop-blur-sm border border-zinc-800">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.03),transparent_50%)]" />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    {t("a20")}
                  </h3>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <MapPin
                          className="h-5 w-5 text-zinc-400"
                          strokeWidth={1.5}
                        />
                        <span className="text-lg font-medium text-white">
                          Душанбе
                        </span>
                      </div>
                      <div className="pl-8 space-y-1">
                        <p className="text-sm text-zinc-300">
                          +992 88 888 0101
                        </p>
                        <p className="text-sm text-zinc-500">
                          улица М.Назаршоева 143
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <MapPin
                          className="h-5 w-5 text-zinc-400"
                          strokeWidth={1.5}
                        />
                        <span className="text-lg font-medium text-white">
                          Худжанд
                        </span>
                      </div>
                      <div className="pl-8 space-y-1">
                        <p className="text-sm text-zinc-300">
                          +992 88 888 0101
                        </p>
                        <p className="text-sm text-zinc-500">
                          17 микрорайон, строение 2
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-zinc-900/50 p-8 backdrop-blur-sm border border-zinc-800">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.03),transparent_50%)]" />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    {t("a21")}{" "}
                  </h3>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
                    {[
                      "Турсунзаде",
                      "Истаравшан",
                      "Пянджакент",
                      "Исфара",
                      "Бохтар",
                      "Восеъ",
                      "Гарм",
                    ].map((city) => (
                      <div
                        key={city}
                        className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                      >
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <p className="text-5xl text-center">{t("a22")}</p>
      </section>

      <section className="space-y-8 md:flex justify-center gap-[300px]">
        <section className="mt-[80px]">
          <section className="md:mb-[40px]">
            <p className="text-sm md:text-base text-gray-400 dark:text-gray-500 font-light mb-3 uppercase tracking-wider">
              СОГД
            </p>
            <div className="flex gap-6 md:gap-12 pb-4 border-b-4 border-yellow-500 dark:border-yellow-400">
              <p className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                2170{" "}
                <span className="text-base md:text-lg font-normal text-gray-600 dark:text-gray-400">
                  АКБ
                </span>
              </p>
              <p className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                2170{" "}
                <span className="text-base md:text-lg font-normal text-gray-600 dark:text-gray-400">
                  ОКБ
                </span>
              </p>
            </div>
          </section>

          <section className="md:mb-[40px]">
            <p className="text-sm md:text-base text-gray-400 dark:text-gray-500 font-light mb-3 uppercase tracking-wider">
              РРП и Хатлон
            </p>
            <div className="flex gap-6 md:gap-12 pb-4 border-b-4 border-yellow-500 dark:border-yellow-400">
              <p className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                3521{" "}
                <span className="text-base md:text-lg font-normal text-gray-600 dark:text-gray-400">
                  АКБ
                </span>
              </p>
              <p className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                1254{" "}
                <span className="text-base md:text-lg font-normal text-gray-600 dark:text-gray-400">
                  ОКБ
                </span>
              </p>
            </div>
          </section>

          <section className="md:mb-[40px]">
            <p className="text-sm md:text-base text-gray-400 dark:text-gray-500 font-light mb-3 uppercase tracking-wider">
              ГБАО
            </p>
            <div className="flex gap-6 md:gap-12 pb-4 border-b-4 border-yellow-500 dark:border-yellow-400">
              <p className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                6550{" "}
                <span className="text-base md:text-lg font-normal text-gray-600 dark:text-gray-400">
                  АКБ
                </span>
              </p>
              <p className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                2032{" "}
                <span className="text-base md:text-lg font-normal text-gray-600 dark:text-gray-400">
                  ОКБ
                </span>
              </p>
            </div>
          </section>
        </section>
        <Image src={img5} alt="Regional map" className="mt-8" />
      </section>

      <div className="min-h-screen bg-background py-16 px-4 md:mt-[100px]">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted/30 dark:bg-muted/10 rounded-2xl p-8 flex items-center justify-between">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  15 000 кв.м
                </p>
                <p className="text-muted-foreground text-sm md:text-base">
                  {t("a24")}
                </p>
              </div>
              <div className="ml-4">
                <div className="bg-amber-400 dark:bg-amber-500 p-4 rounded-2xl">
                  <House size={40} className="text-white" strokeWidth={2} />
                </div>
              </div>
            </div>

            <div className="bg-muted/30 dark:bg-muted/10 rounded-2xl p-8 flex items-center justify-between">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {t("a25")}
                </p>
                <p className="text-muted-foreground text-sm md:text-base">
                  {t("a26")}
                </p>
              </div>
              <div className="ml-4">
                <div className="bg-amber-400 dark:bg-amber-500 p-4 rounded-2xl">
                  <Truck size={40} className="text-white" strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-muted/30 dark:bg-muted/10 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  8 000+
                </p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {t("a27")}
                </p>
              </div>
              <div className="ml-4">
                <Users
                  size={32}
                  className="text-amber-400 dark:text-amber-500"
                  strokeWidth={2}
                />
              </div>
            </div>

            <div className="bg-muted/30 dark:bg-muted/10 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  5+
                </p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {t("a28")}
                </p>
              </div>
              <div className="ml-4">
                <HandHelping
                  size={32}
                  className="text-amber-400 dark:text-amber-500"
                  strokeWidth={2}
                />
              </div>
            </div>

            <div className="bg-muted/30 dark:bg-muted/10 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  47+
                </p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {t("a29")}
                </p>
              </div>
              <div className="ml-4">
                <MapPin
                  size={32}
                  className="text-amber-400 dark:text-amber-500"
                  strokeWidth={2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[500px] bg-[#111827] md:mt-[-230px]">
        <p className="text-5xl text-center pt-[50px] font-bold">{t("a30")}</p>
        <p className="w-[59%] mt-[50px] m-auto text-center text-2xl">
          {t("a31")}
        </p>

        <section className="flex mt-[100px] justify-center gap-[50px] flex-wrap">
          <Image src={img6} alt="" />
          <Image src={img7} alt="" />
          <Image src={img8} alt="" />
          <Image src={img9} alt="" />
          <Image src={img10} alt="" />
        </section>
      </div>

      <section>
        <p className="md:block hidden text-5xl text-center md:mt-[50px] mt-[1000px] mb-[50px]">
          {t("a32")}
        </p>
      </section>

      <SwiperCom p1={t("a33")} p2={t("a34")} p3={t("a35")} />

      <section>
        <p className="text-5xl text-center mt-[100px]">Вакансии</p>
      </section>

      <section className="mt-[100px]">
        <Card p1={t("a36")} p2={t("a37")} p3={t("a38")} p4={t("a35")} />
      </section>

      <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-4 md:p-8 md:mt-[150px] mt-[800px]">
        <div className="w-full max-w-7xl bg-zinc-800/50 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 lg:p-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
                Стать партнёром
              </h1>

              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Имя фамилия"
                  className="w-full px-6 py-4 rounded-2xl bg-zinc-700/50 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />

                <input
                  type="text"
                  placeholder="Название компании"
                  className="w-full px-6 py-4 rounded-2xl bg-zinc-700/50 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-6 py-4 rounded-2xl bg-zinc-700/50 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-6 py-4 rounded-2xl bg-zinc-700/50 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="relative">
                  <label className="flex items-center gap-4 w-full px-6 py-4 rounded-2xl bg-zinc-700/50 border border-zinc-600 cursor-pointer hover:bg-zinc-700 transition-all group">
                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400 transition-colors">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        Загрузить предложение
                      </p>
                      <p className="text-zinc-400 text-sm">
                        Размер файла не более 5 МБ
                      </p>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>

                <button className="w-full px-6 py-5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-lg transition-all shadow-lg hover:shadow-xl">
                  Отправить
                </button>
              </div>
            </div>

            <div className="relative bg-slate-900 flex flex-col">
              <div className="flex-1 relative overflow-hidden">
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115695.35809801188!2d68.66451697366629!3d38.5737342031721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbb0e3fbcbb11%3A0xee9c84e780ab0e9b!2z0KLQtdGA0L7RgNC-0YHRjNGE0LXQvdGB0LjQu9C90LjQuSDQvdCw0LXQvNCw!5e0!3m2!1sru!2stj!4v1697012345678!5m2!1sru!2stj"
                      width="750"
                      height="750"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 p-8 bg-zinc-800/80 backdrop-blur">
                <div className="flex items-center gap-3 bg-zinc-700/50 rounded-xl px-4 py-3">
                  <div className="w-10 h-10 bg-zinc-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-white font-medium">
                    contact@company.com
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-zinc-700/50 rounded-xl px-4 py-3">
                  <div className="w-10 h-10 bg-zinc-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-white font-medium">
                    +992 88 888 0101
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
