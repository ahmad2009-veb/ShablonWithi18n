"use client";

import { useTranslations } from "next-intl";
import { useParams, usePathname, useRouter } from "next/navigation";

export default function Page() {
  const t = useTranslations("home");
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams();

  const changeLang = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;

    const newPath = segments.join("/");
    router.replace(newPath);
  };

  return (
    <div>
      {t("title")}

      <select value={locale} onChange={(e) => changeLang(e.target.value)}>
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="tj">Тоҷикӣ</option>
      </select>
    </div>
  );
}
