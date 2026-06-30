# William Saunders — Software Engineering Portfolio

A modern personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or later
- npm (included with Node.js)

### Run locally

1. Open a terminal in this project folder.

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The page reloads automatically when you edit files.

### Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel

[Vercel](https://vercel.com) is the recommended host for Next.js apps.

### Option 1: Deploy via GitHub (recommended)

1. Push this project to a GitHub repository.
2. Sign in at [vercel.com](https://vercel.com) with your GitHub account.
3. Click **Add New Project** and import your repository.
4. Vercel detects Next.js automatically — keep the default settings.
5. Click **Deploy**.

Each push to your main branch triggers a new deployment.

### Option 2: Deploy with the Vercel CLI

1. Install the CLI globally:

```bash
npm i -g vercel
```

2. From the project folder:

```bash
vercel
```

3. Follow the prompts to link or create a project.
4. For production:

```bash
vercel --prod
```

## Customisation

Update placeholder links and personal details in:

- `src/data/content.ts` — site info, projects, resume, and contact links

## Project Structure

```
src/
├── app/              # Next.js App Router pages and layout
├── components/
│   ├── sections/     # Page sections (Hero, About, Projects, etc.)
│   └── ui/           # Reusable UI components
├── data/             # Site content and constants
└── types/            # TypeScript interfaces
```
