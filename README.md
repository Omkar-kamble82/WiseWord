# WiseWord: AI Powered Blog App : Next.js v14, Pinecone, OpenAI, Shadcn UI, Clerk-Auth, Prisma ORM, UploadThing
<p><a href="https://wise-word.vercel.app/">WiseWord </a> is a Fullstack AI blogging application. built using Next.js, Typescript, MongoDB, Prisma ORM, UploadThing, shadcn ui library, React-hook-form and Zod for form validation. User can perform all CRUD Operations of creating, deleting and updating the blogs. Every blog is Stored as a vector embedding in Pinecone vector database and a ChatBot uses this embedding to answer questions related to blogs. Any user can view all the post but only authorized user can update and delete the blog. </p>

![image](https://github.com/Omkar-kamble82/WiseWord/assets/96938880/e4ab5106-fbbb-4845-99dc-8a97c01c1fca)


![image](https://github.com/Omkar-kamble82/WiseWord/assets/96938880/702a3436-4c12-406a-96a9-84f5f0800fec)
![image](https://github.com/Omkar-kamble82/WiseWord/assets/96938880/30c855cb-3b02-42fb-b3fb-7ae72f61fd9b)

<br/>
<h2>Key Features</h2>

- Server Components
- Vector Embedding with Pinecone
- AI Generated Respones using OpenAI API
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

//Pinecode and OpenAI
OPENAI_API_KEY=
PINECONE_API_KEY=
```

### Setup Prisma

```shell
npx prisma db push
```

### Start the app

```shell
npm run dev
```
