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
├── app/ → ریشه‌ی صفحات و API Routes
│ ├── (auth)/ → گروپ صفحات مربوط به احراز هویت
│ │ ├── login/page.tsx → صفحه ورود
│ │ └── register/page.tsx → صفحه ثبت‌نام
│ ├── dashboard/ → داشبورد
│ │ └── page.tsx
│ ├── tasks/
│ │ ├── page.tsx
│ │ └── [id]/page.tsx
│ ├── attendance/
│ │ ├── page.tsx
│ │ └── history/page.tsx
│ ├── team/page.tsx
│ ├── settings/page.tsx
│ └── api/ → API Routes (به جای /pages/api)
│ ├── auth/
│ │ └── [...nextauth]/route.ts
│ ├── tasks/route.ts
│ ├── attendance/route.ts
│ └── users/route.ts
│
├── components/
│ ├── ui/ → UI Components مثل Button، Input
│ ├── layout/ → Layoutهای صفحه مثل Sidebar
│ └── shared/ → Avatar، Toast، Card، ...
│
├── context/ → Contextها مثل AuthContext
│ └── AuthProvider.tsx
│
├── lib/ → فایل‌های منطقی مثل authOptions یا db
│ ├── auth.ts
│ └── db.ts
│
├── hooks/
│ ├── useTasks.ts
│ └── useAuth.ts
│
├── services/ → توابع ارتباط با API
│ ├── taskService.ts
│ └── authService.ts
│
├── utils/ → توابع کمکی (helper functions)
│ ├── validation.ts
│ └── date.ts
│
├── styles/
│ ├── globals.css
│ └── tailwind.config.js
│
├── public/
│ └── images/
│ └── auth/
│ └── login.png
│
└── types/ → تایپ‌های TypeScript مشترک
├── user.ts
└── task.ts
