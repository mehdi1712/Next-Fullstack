# Next.js Fullstack Authentication App

A modern, full-stack authentication application built with Next.js 15+, featuring secure authentication, database integration, and a beautiful UI.

## Tech Stack

- **Framework**: Next.js 15+
- **Authentication**: Better Auth
- **Database**: Neon DB with Drizzle ORM
- **UI Components**: Shadcn UI
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript

## Prerequisites

- Node.js 18+ installed
- pnpm package manager
- Neon DB account
- Git

## Getting Started

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd [your-project-name]
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with the following variables:
   ```env
   DATABASE_URL=your_neon_db_connection_string
   NEXTAUTH_SECRET=your_secret_key
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Database Setup**
   Push the database schema to your Neon DB:
   ```bash
   npx drizzle-kit push
   ```

5. **Run the Development Server**
   ```bash
   pnpm dev
   ```

   The application will be available at `http://localhost:3000`

## Features

- Secure authentication system
- Modern UI with Shadcn components
- Type-safe database operations with Drizzle ORM
- Full TypeScript support

## Project Structure

```
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
├── lib/                # Utility functions and configurations
├── db/                 # Database schema and migrations
├── public/             # Static assets
└── styles/             # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
