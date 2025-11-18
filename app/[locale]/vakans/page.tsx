import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1 space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-semibold mb-4 dark:text-white">
                  Регионы
                </h2>
                <div className="space-y-3">
                  <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 text-amber-500 rounded"
                      />
                      <span className="text-gray-700 dark:text-gray-200">
                        Душанбе
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      8
                    </span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-amber-500 rounded"
                      />
                      <span className="text-gray-700 dark:text-gray-200">
                        Худжанд
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      14
                    </span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-amber-500 rounded"
                      />
                      <span className="text-gray-700 dark:text-gray-200">
                        Бохтар
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      2
                    </span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-amber-500 rounded"
                      />
                      <span className="text-gray-700 dark:text-gray-200">
                        Турсунзаде
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      1
                    </span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-amber-500 rounded"
                      />
                      <span className="text-gray-700 dark:text-gray-200">
                        Истаравшан
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      -
                    </span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-amber-500 rounded"
                      />
                      <span className="text-gray-700 dark:text-gray-200">
                        Пянджакент
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      3
                    </span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-amber-500 rounded"
                      />
                      <span className="text-gray-700 dark:text-gray-200">
                        Исфара
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      -
                    </span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-amber-500 rounded"
                      />
                      <span className="text-gray-700 dark:text-gray-200">
                        Восеҳ
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      -
                    </span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-amber-500 rounded"
                      />
                      <span className="text-gray-700 dark:text-gray-200">
                        Гарм
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      -
                    </span>
                  </label>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="border-l-4 border-amber-500 pl-4 mb-4">
                  <h2 className="text-lg font-semibold dark:text-white">
                    Категории
                  </h2>
                </div>
                <div className="space-y-3">
                  <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-amber-500 rounded"
                      />
                      <span className="text-gray-700 dark:text-gray-200">
                        IT специалист
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      8
                    </span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-amber-500 rounded"
                      />
                      <span className="text-gray-700 dark:text-gray-200">
                        Юрист
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      14
                    </span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-amber-500 rounded"
                      />
                      <span className="text-gray-700 dark:text-gray-200 text-sm">
                        Продажи, розничная торговля
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      2
                    </span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-amber-500 rounded"
                      />
                      <span className="text-gray-700 dark:text-gray-200 text-sm">
                        Административный персонал
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      1
                    </span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-amber-500 rounded"
                      />
                      <span className="text-gray-700 dark:text-gray-200 text-sm">
                        Маркетинг, реклама, дизайн
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      -
                    </span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-amber-500 rounded"
                      />
                      <span className="text-gray-700 dark:text-gray-200">
                        Hr, кадры
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      3
                    </span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-amber-500 rounded"
                      />
                      <span className="text-gray-700 dark:text-gray-200 text-sm">
                        Охрана, безопасность
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      -
                    </span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-amber-500 rounded"
                      />
                      <span className="text-gray-700 dark:text-gray-200 text-sm">
                        Бухгалтерия, финансы
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      -
                    </span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-amber-500 rounded"
                      />
                      <span className="text-gray-700 dark:text-gray-200">
                        Руководители
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      -
                    </span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-amber-500 rounded"
                      />
                      <span className="text-gray-700 dark:text-gray-200 text-sm">
                        Транспорт, логистика, склад
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      -
                    </span>
                  </label>
                </div>
              </div>
            </aside>

            <main className="lg:col-span-3">
              <h1 className="text-4xl font-bold mb-6 dark:text-white">
                Вакансии
              </h1>

              <div className="flex gap-3 mb-8">
                <input
                  type="text"
                  placeholder="Введите вакансию"
                  className="flex-1 px-6 py-4 rounded-full bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 shadow-sm border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 py-4 shadow-sm transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <span className="bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-1 rounded">
                      Опыт от 1 года
                    </span>
                    <span className="text-gray-400 dark:text-gray-500 text-sm flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Душанбе
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">
                    Торговый представитель
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    Супервайзер отдела продаж. Душнбе и РРПП. О компании: Мы —
                    развивающийся производитель туалетного и хозяйственного мыла
                  </p>
                  <div className="flex gap-3">
                    <Link href={"/provakans"}>
                      <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors">
                        Подробнее
                      </button>
                    </Link>
                    <button className="border-2 border-amber-500 text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 px-6 py-2.5 rounded-full font-medium transition-colors">
                      Подать заявку
                    </button>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <span className="bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-1 rounded">
                      Опыт не нужен
                    </span>
                    <span className="text-gray-400 dark:text-gray-500 text-sm flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Душанбе
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">
                    Мерчандайзер
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    Полный рабочий день. О компании: Мы - крупнейшая
                    дистрибуционная компания в Таджикистане, с многолетним
                    опытом на рынке
                  </p>
                  <div className="flex gap-3">
                    <Link href={"/provakans"}>
                      <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors">
                        Подробнее
                      </button>
                    </Link>
                    <button className="border-2 border-amber-500 text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 px-6 py-2.5 rounded-full font-medium transition-colors">
                      Подать заявку
                    </button>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <span className="bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-1 rounded">
                      Опыт от 3 года
                    </span>
                    <span className="text-gray-400 dark:text-gray-500 text-sm flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Душанбе
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">
                    Бухгалтер
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    Нужен сотрудник в бухгалтерию. Душанбе и РРП. О компании: Мы
                    крупнейшая дистрибуционная компания в Таджикистане
                  </p>
                  <div className="flex gap-3">
                    <Link href={"/provakans"}>
                      <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors">
                        Подробнее
                      </button>
                    </Link>
                    <button className="border-2 border-amber-500 text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 px-6 py-2.5 rounded-full font-medium transition-colors">
                      Подать заявку
                    </button>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <span className="bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-1 rounded">
                      Опыт от 1 года
                    </span>
                    <span className="text-gray-400 dark:text-gray-500 text-sm flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Душанбе
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">
                    Супервайзер
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    Супервайзер отдела продаж. Душнбе и РРП. О компании: Мы
                    крупнейшая дистрибуционная компания в Таджикистане
                  </p>
                  <div className="flex gap-3">
                    <Link href={"/provakans"}>
                      <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors">
                        Подробнее
                      </button>
                    </Link>
                    <button className="border-2 border-amber-500 text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 px-6 py-2.5 rounded-full font-medium transition-colors">
                      Подать заявку
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
