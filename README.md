# WiseWord: Full stack Blog App: Next.js v14, Shadcn UI, Clerk-Auth, Prisma ORM, UploadThing
<p><a href="https://wise-word.vercel.app/">WiseWord </a> is a Fullstack blogging application. built using Next.js, Typescript, MongoDB, Prisma ORM, UploadThing, shadcn ui library, React-hook-form and Zod for form validation. User can perform all CRUD Operations of creating, deleting and updating the blogs. Any user can view all the post but only authorized user can update and delete the blog. </p>

<img width="946" alt="image" src="https://github.com/Omkar-kamble82/WiseWord/assets/96938880/c03a1613-cc4f-4df6-9b3d-ea24bf317fcb">
<img width="946" alt="image" src="https://github.com/Omkar-kamble82/WiseWord/assets/96938880/27504329-2d35-4250-a6b9-cdb4a76b1819">
<br/>
<br/>
<h2>Key Features</h2>

- Server Components
- CURD Operations
- Upload with UploadThing
- Shadcn UI Components
- Clerk Authentication
- Prisma ORM
- React-hook-form and Zod for form validation

### Cloning the repository

```shell
git clone https://github.com/Omkar-kamble82/WiseWord.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
//Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

//Prisma DB URL
DATABASE_URL=

//Upload Thing
UPLOADTHING_SECRET=
UPLOADTHING_APP_IDL=
```

### Setup Prisma

```shell
npx prisma db push
```

### Start the app

```shell
npm run dev
```
