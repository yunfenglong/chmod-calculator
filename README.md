# chmod-calculator

A simple web-based chmod permission calculator created to help Linux users understand and calculate file permissions.

## GitHub Repository

[https://github.com/yunfenglong/chmod-calculator](https://github.com/yunfenglong/chmod-calculator)

## Why This Project?

As I started using Linux, I found myself frequently needing to understand and set file permissions using the chmod command. However, remembering all the different permission combinations (read, write, execute for user, group, and others) was challenging. This calculator was created to:

- Visualize the relationship between numeric (octal) and symbolic permission representations
- Help users understand how file permissions work in Linux
- Provide an easy way to calculate the correct chmod values
- Serve as a learning tool for understanding Linux file permissions

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
