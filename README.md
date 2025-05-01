This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


src/
├── api/                        → مسیر API‌ها (Route‌ها)
│   ├── auth/                   → auth routes (login, logout, etc.)
│   ├── tasks/                  → tasks CRUD API
│   ├── attendance/             → حضور و غیاب
│   └── users/                  → مدیریت کاربران
│
├── components/                 → کامپوننت‌های بازاستفاده‌پذیر
│   ├── ui/                     → کامپوننت‌های UI مثل Button, Input, Modal
│   ├── layout/                 → نوار کناری، نوار بالا، هدر و فوتر
│   └── shared/                 → کامپوننت‌های مشترک مثل کارت‌ها، توستر، آواتار
│
├── context/                    → Context API‌ها (مثلاً AuthContext)
│   ├── AuthContext.tsx         → مدیریت وضعیت احراز هویت
│   └── TaskContext.tsx         → مدیریت وضعیت تسک‌ها
│
├── hooks/                      → Custom Hooks
│   ├── useTasks.ts             → Hook برای تسک‌ها
│   ├── useAuth.ts              → Hook برای احراز هویت
│   └── useAttendance.ts        → Hook برای حضور و غیاب
│
├── pages/                      → صفحات پروژه
│   ├── (auth)/                 → صفحات Auth (login, register, ...)
│   │   ├── login.tsx
│   │   └── register.tsx
│   ├── dashboard/              → صفحه داشبورد
│   │   ├── index.tsx
│   │   └── components/         → کامپوننت‌های خاص داشبورد
│   ├── tasks/                  → صفحه تسک‌ها
│   │   ├── index.tsx           → نمایش لیست تسک‌ها
│   │   └── [id]/               → صفحه تسک خاص
│   ├── attendance/             → صفحه حضور و غیاب
│   │   ├── index.tsx
│   │   └── history.tsx         → تاریخچه حضور
│   ├── team/                   → تیم و اعضا
│   │   └── index.tsx
│   └── settings/               → تنظیمات کاربر
│       └── index.tsx
│
├── services/                   → خدمات و API‌ها (fetch یا axios)
│   ├── taskService.ts          → متدهای API برای تسک‌ها
│   └── authService.ts          → متدهای API برای احراز هویت
│
├── styles/                     → استایل‌ها
│   ├── globals.css             → استایل‌های سراسری
│   └── tailwind.config.js      → تنظیمات Tailwind
│
├── utils/                      → ابزارهای کمکی و متدهای عمومی
│   ├── dateUtils.ts            → توابع کمکی برای تاریخ
│   ├── validationUtils.ts      → توابع کمکی برای اعتبارسنجی فرم‌ها
│   └── authUtils.ts            → توابع کمکی برای احراز هویت
│
└── App.tsx                     → ریشه اپلیکیشن
