# 🧠 WiseWord — AI-Powered Blogging Platform
<p><a href="https://wise-word.vercel.app/">WiseWord</a> WiseWord is a full-stack AI blogging application that combines content creation with intelligent retrieval. Built using Next.js 14, TypeScript, Pinecone, and OpenAI, it allows users to write, manage, and explore blogs — with an integrated AI chatbot that answers questions based on your blog content using vector embeddings.</p>

![image](https://github.com/Omkar-kamble82/WiseWord/assets/96938880/e4ab5106-fbbb-4845-99dc-8a97c01c1fca)


![image](https://github.com/Omkar-kamble82/WiseWord/assets/96938880/702a3436-4c12-406a-96a9-84f5f0800fec)
![image](https://github.com/Omkar-kamble82/WiseWord/assets/96938880/30c855cb-3b02-42fb-b3fb-7ae72f61fd9b)

<br/>

## 🧱 Tech Stack

| Layer         | Technologies                              |
| :-------------- | :--------------------------------------- |
| Frontend |	Next.js 14, TypeScript, Shadcn UI, React-hook-form, Zod |
| Backend |	Next.js API Routes, Prisma ORM |
| Database |	MongoDB |
| Vector Database |	Pinecone |
| AI Engine |	OpenAI API |
| Authentication |	Clerk |
| File Uploads |	UploadThing |
| Deployment |	Vercel |

<h2>🚀 Features</h2>

<h3>📝 Blogging System</h3>

- Blogs are stored in MongoDB via Prisma ORM for efficient querying and schema management.
- Perform all CRUD operations (Create, Read, Update, Delete) on blog posts.
- Only authorized users can edit or delete their own blogs.

<h3>🤖 AI-Powered Chatbot</h3>

- Each blog is converted into a vector embedding and stored in Pinecone Vector Database.
- Integrated OpenAI API generates context-aware answers to questions related to stored blogs.

<h3>🪄 Modern User Experience</h3>

- Built with Shadcn UI for an elegant, responsive interface.
- React-hook-form + Zod used for robust form handling and validation.
- UploadThing handles image/file uploads seamlessly.

<h3>🔐 Authentication</h3>

- Secure user authentication via Clerk — supports login, signup, and session management.
- Access control ensures only verified users can perform write operations.

<h3>🧑‍💻 Future Enhancements</h3>

- Blog recommendation engine based on vector similarity.
- Comment and like system with user interactions.
- Email notifications for new posts or AI insights.

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
UPLOADTHING_APP_ID=

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
