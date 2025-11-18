"use client"
import { useTranslations } from 'next-intl';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Header = () => {
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

      <Select onValueChange={changeLang} defaultValue={locale}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="ru">Русский</SelectItem>
            <SelectItem value="tj">Тоҷикӣ</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default Header
