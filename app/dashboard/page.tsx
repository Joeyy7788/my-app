import React from "react";

const monthlyBars = [
  { month: "Jul", income: 1420, expense: 760 },
  { month: "Aug", income: 1620, expense: 800 },
  { month: "Sep", income: 1820, expense: 866 },
  { month: "Oct", income: 1430, expense: 770 },
  { month: "Nov", income: 1650, expense: 1080 },
  { month: "Dec", income: 2100, expense: 1180 },
];

const weeklyBars = [
  { day: "Mon", a: 46, b: 45 },
  { day: "Tue", a: 25, b: 22 },
  { day: "Wed", a: 13, b: 58 },
  { day: "Thu", a: 76, b: 42 },
  { day: "Fri", a: 25, b: 92 },
  { day: "Sat", a: 58, b: 75 },
  { day: "Sun", a: 22, b: 48 },
];

export default function Dashboard() {
  const maxBarVal = 2500;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full p-4">
      {/* 1. Users This Week (Area Chart) */}
      <div className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-xs p-6 flex flex-col justify-between transition-colors">
        <div className="flex justify-between items-start">
          <div>
            <h5 className="text-3xl font-bold text-gray-900 dark:text-white">32.4k</h5>
            <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">Users this week</p>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
            ↑ 12%
          </span>
        </div>

        <div className="my-5">
          <svg viewBox="0 0 320 120" className="w-full h-36 overflow-visible">
            <defs>
              <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M0,25 C40,25 50,75 80,75 C110,75 130,50 155,48 C180,46 195,12 215,12 C235,12 255,105 275,105 C295,105 305,55 320,50 L320,120 L0,120 Z"
              fill="url(#blueGrad)"
            />
            <path
              d="M0,25 C40,25 50,75 80,75 C110,75 130,50 155,48 C180,46 195,12 215,12 C235,12 255,105 275,105 C295,105 305,55 320,50"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="flex justify-between items-center border-t border-gray-200 dark:border-zinc-800 pt-4 text-sm">
          <button
            type="button"
            className="font-medium text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white inline-flex items-center gap-1"
          >
            Last 7 days <span>⌄</span>
          </button>
          <a
            href="#"
            className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1"
          >
            Users Report <span>→</span>
          </a>
        </div>
      </div>

      {/* 2. Profit / Income & Expense (Horizontal Bar Chart) */}
      <div className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-xs p-6 flex flex-col justify-between text-gray-800 dark:text-zinc-200 transition-colors">
        <div>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 dark:text-zinc-400">ກຳໄລ</p>
              <h5 className="text-2xl font-bold text-gray-900 dark:text-white mt-0.5">5,405 ໂດລາ</h5>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              ↑ ອັດຕາກຳໄລ 23.5%
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 border-y border-gray-100 dark:border-zinc-800 py-3 my-4">
            <div>
              <p className="text-xs text-gray-500 dark:text-zinc-400">รายได้</p>
              <p className="text-base font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">23,635 ดอลลาร์</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-zinc-400">ค่าใช้จ่าย</p>
              <p className="text-base font-bold text-rose-600 dark:text-rose-400 mt-0.5">-18,230</p>
            </div>
          </div>

          <div className="space-y-2.5">
            {monthlyBars.map((row) => (
              <div key={row.month} className="grid grid-cols-[36px_1fr] items-center gap-2">
                <span className="text-xs text-gray-500 dark:text-zinc-400">{row.month}</span>
                <div className="space-y-1 border-l border-dashed border-gray-200 dark:border-zinc-700 pl-2">
                  <div
                    className="h-2.5 rounded-r-sm bg-emerald-600 dark:bg-emerald-500"
                    style={{ width: `${(row.income / maxBarVal) * 100}%` }}
                    title={`Income: ${row.income}`}
                  />
                  <div
                    className="h-2.5 rounded-r-sm bg-rose-600 dark:bg-rose-500"
                    style={{ width: `${(row.expense / maxBarVal) * 100}%` }}
                    title={`Expense: ${row.expense}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-[11px] text-gray-400 dark:text-zinc-500 pl-11 mt-2">
            <span>$0</span>
            <span>$500</span>
            <span>$1000</span>
            <span>$1500</span>
            <span>$2000</span>
            <span>$2500</span>
          </div>

          <div className="flex justify-center gap-5 text-xs text-gray-600 dark:text-zinc-400 mt-2">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-xs bg-emerald-600 dark:bg-emerald-500" /> Income
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-xs bg-rose-600 dark:bg-rose-500" /> Expense
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-gray-200 dark:border-zinc-800 pt-4 mt-4 text-sm">
          <button
            type="button"
            className="font-medium text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white inline-flex items-center gap-1"
          >
            7 ວັນທີ່ຜ່ານມາ <span>⌄</span>
          </button>
          <a
            href="#"
            className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1"
          >
            ລາຍງານລາຍຮັບ <span>→</span>
          </a>
        </div>
      </div>

      {/* 3. Target Customers (Vertical Grouped Bar Chart) */}
      <div className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-xs p-6 flex flex-col justify-between text-gray-800 dark:text-zinc-200 transition-colors">
        <div>
          <div className="flex justify-between items-start gap-2">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-gray-600 dark:text-zinc-300 shrink-0 font-bold text-sm">
                👥
              </div>
              <div>
                <h5 className="text-2xl font-bold text-gray-900 dark:text-white">3.4k</h5>
                <p className="text-xs text-gray-500 dark:text-zinc-400 leading-snug mt-0.5">
                  ຈຳນວນລູກຄ້າເປົ້າໝາຍທີ່ສ້າງຂື້ນຕໍ່ອາທິດ
                </p>
              </div>
            </div>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shrink-0">
              ↑ 42.5%
            </span>
          </div>

          <div className="flex justify-between items-center border-y border-gray-100 dark:border-zinc-800 py-3 my-4 text-sm">
            <div>
              <span className="text-gray-500 dark:text-zinc-400 text-xs">ຈຳນວນເງີນທີ່ໃຊ້: </span>
              <span className="font-bold text-gray-900 dark:text-white">3,232 ໂດລາ</span>
            </div>
            <div>
              <span className="text-gray-500 dark:text-zinc-400 text-xs">ການປ່ຽນ: </span>
              <span className="font-bold text-gray-900 dark:text-white">1.2%</span>
            </div>
          </div>

          <div className="h-44 flex items-end justify-between gap-2 pt-4 px-1">
            {weeklyBars.map((item) => (
              <div key={item.day} className="flex-1 flex flex-col items-center h-full justify-end">
                <div className="w-full flex items-end justify-center gap-1 h-36">
                  <div
                    className="w-2.5 rounded-t-md bg-blue-600 dark:bg-blue-500"
                    style={{ height: `${item.a}%` }}
                    title={`${item.day}: ${item.a}`}
                  />
                  <div
                    className="w-2.5 rounded-t-md bg-sky-200 dark:bg-sky-900"
                    style={{ height: `${item.b}%` }}
                    title={`${item.day}: ${item.b}`}
                  />
                </div>
                <span className="text-xs text-gray-500 dark:text-zinc-400 mt-2">{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-gray-200 dark:border-zinc-800 pt-4 mt-4 text-sm">
          <button
            type="button"
            className="font-medium text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white inline-flex items-center gap-1"
          >
            7 ວັນທີ່ຜ່ານມາ <span>⌄</span>
          </button>
          <a
            href="#"
            className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1"
          >
            ລາຍງານລູກຄ້າເຂົ້າເປົ້າ <span>→</span>
          </a>
        </div>
      </div>

      {/* 4. Website Traffic (Pie Chart) */}
      <div className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-xs p-6 flex flex-col justify-between text-gray-800 dark:text-zinc-200 transition-colors">
        <div>
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-1.5">
                <h5 className="text-lg font-bold text-gray-900 dark:text-white">ປະລິມານການເຂົ້າຊົມເວບໄຊ</h5>
                <span
                  className="w-4 h-4 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400 text-[11px] inline-flex items-center justify-center"
                  title="สถิติการเข้าชม"
                >
                  ?
                </span>
              </div>
              <button
                type="button"
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1 inline-flex items-center gap-1"
              >
                31 พ.ย. - 31 พ.ย. <span>⌄</span>
              </button>
            </div>
            <button
              type="button"
              className="w-8 h-8 rounded-lg border border-gray-200 dark:border-zinc-700 text-gray-500 dark:text-zinc-400 hover:bg-gray-50 dark:hover:bg-zinc-800 inline-flex items-center justify-center"
            >
              •••
            </button>
          </div>

          <div className="my-4 flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-44 h-44">
              <path
                d="M100,100 L100,10 A90,90 0 1,1 84,188.5 Z"
                fill="#2563eb"
                stroke="#18181b"
                strokeWidth="2"
              />
              <path
                d="M100,100 L84,188.5 A90,90 0 0,1 14.5,73 Z"
                fill="#93c5fd"
                stroke="#18181b"
                strokeWidth="2"
              />
              <path
                d="M100,100 L14.5,73 A90,90 0 0,1 100,10 Z"
                fill="#1e3a8a"
                stroke="#18181b"
                strokeWidth="2"
              />
              <text x="142" y="108" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">
                52.8%
              </text>
              <text x="58" y="138" fill="#1e3a8a" fontSize="12" fontWeight="bold" textAnchor="middle">
                26.8%
              </text>
              <text x="68" y="64" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">
                20.4%
              </text>
            </svg>

            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600 dark:text-zinc-400 mt-3">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" /> ຜູ້ເຂົ້າຊົມໂດຍກົງ
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-300" /> ຈາກຜົນການຄົ້ນຫາປົກກະຕິ
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-900" /> ການສົ່ງຕໍ່ຜູ້ເຂົ້າຊົມ
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-gray-200 dark:border-zinc-800 pt-4 mt-4 text-sm">
          <button
            type="button"
            className="font-medium text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white inline-flex items-center gap-1"
          >
            7 ວັນທີ່ຜ່ານມາ <span>⌄</span>
          </button>
          <a
            href="#"
            className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1"
          >
            ການດຳເນີນງານ <span>→</span>
          </a>
        </div>
      </div>

      {/* 5. Monthly Revenue Summary */}
      <div className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-xs p-6 flex flex-col justify-between text-gray-800 dark:text-zinc-200 transition-colors">
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h5 className="text-2xl font-bold text-gray-900 dark:text-white">$18,920</h5>
              <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">ຍອດຂາຍລາຍເດືອນ</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              ↑ 8.4%
            </span>
          </div>

          <div className="my-6 space-y-3">
            <div className="flex justify-between text-xs text-gray-500 dark:text-zinc-400">
              <span>ເປົ້າໝາຍ ($22,000)</span>
              <span className="font-semibold text-gray-700 dark:text-zinc-200">86%</span>
            </div>
            <div className="w-full h-3 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 dark:bg-blue-500 rounded-full" style={{ width: "86%" }} />
            </div>
            <p className="text-xs text-gray-400 dark:text-zinc-500">ເຫຼື່ອອີກ $3,080 ຈະເຖິງເປົ້າໝາຍເດືອນນີ້</p>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-gray-200 dark:border-zinc-800 pt-4 text-sm">
          <span className="text-gray-500 dark:text-zinc-400">ເດືອນປັດຈຸບັນ</span>
          <a
            href="#"
            className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1"
          >
            ລາຍລະອຽດ <span>→</span>
          </a>
        </div>
      </div>

      {/* 6. Orders & Conversion Summary */}
      <div className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-xs p-6 flex flex-col justify-between text-gray-800 dark:text-zinc-200 transition-colors">
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h5 className="text-2xl font-bold text-gray-900 dark:text-white">1,428</h5>
              <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">ລາຍການສຳເລັດ</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              ↑ 5.2%
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 my-6">
            <div className="p-3 rounded-xl bg-gray-50 dark:bg-zinc-800/70 border border-gray-100 dark:border-zinc-800">
              <p className="text-xs text-gray-500 dark:text-zinc-400">ສະເລ່ຍ. ລາຍການ</p>
              <p className="text-base font-bold text-gray-900 dark:text-white mt-0.5">$84.50</p>
            </div>
            <div className="p-3 rounded-xl bg-gray-50 dark:bg-zinc-800/70 border border-gray-100 dark:border-zinc-800">
              <p className="text-xs text-gray-500 dark:text-zinc-400">ອັດຕາການກັບມາເຂົ້າເບິ່ງຊ້ຳ</p>
              <p className="text-base font-bold text-gray-900 dark:text-white mt-0.5">1.4%</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-gray-200 dark:border-zinc-800 pt-4 text-sm">
          <span className="text-gray-500 dark:text-zinc-400">7 ວັນທີ່ຜ່ານມາ</span>
          <a
            href="#"
            className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1"
          >
            ລາຍງານຄຳສັ່ງຊື້ <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}