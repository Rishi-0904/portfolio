# Overview

This is a modern full-stack web application built as a personal portfolio for Rishi Raj Jaiswal, a Computer Science & Engineering student. The application showcases personal information, education, skills, projects, and achievements through a responsive, single-page application (SPA) with a clean, professional design.

The project uses a monorepo structure with separate client and server directories, implementing a REST API architecture with React frontend and Express backend. It's designed to be deployment-ready with both development and production build configurations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming and dark mode support
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility
- **State Management**: TanStack React Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds
- **Icons**: Lucide React for consistent iconography and React Icons for technology logos

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for fast, optimized server bundling
- **Middleware**: Custom logging middleware for API request monitoring
- **Error Handling**: Centralized error handling with proper HTTP status codes

## Data Storage Solutions
- **Development**: In-memory storage using Map data structures for rapid prototyping
- **Production Ready**: Drizzle ORM configured for PostgreSQL with Neon Database
- **Schema Management**: Centralized schema definition in shared directory using Drizzle and Zod
- **Migrations**: Drizzle Kit for database schema migrations
- **Type Safety**: Fully typed database operations with TypeScript inference

## Code Organization
- **Monorepo Structure**: Shared types and schemas between client and server
- **Path Aliases**: Configured aliases for clean imports (@/, @shared/, @assets/)
- **Component Architecture**: Modular React components with clear separation of concerns
- **Utility Functions**: Centralized utility functions with Tailwind CSS class merging

## Development Experience
- **Hot Reload**: Vite HMR for instant client-side updates
- **Error Handling**: Runtime error overlay for development debugging
- **Replit Integration**: Specialized plugins for Replit development environment
- **Type Checking**: Comprehensive TypeScript configuration with strict mode

## Styling and Theming
- **Design System**: Consistent color palette using CSS custom properties
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities
- **Theme Support**: Light and dark mode support with CSS variable switching
- **Typography**: Custom font stack with Google Fonts integration
- **Animations**: CSS transitions and animations for smooth user interactions

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for modern React development
- **Routing**: Wouter for lightweight client-side routing
- **Backend**: Express.js with TypeScript support for server functionality

## Database and ORM
- **Database**: Neon Database (PostgreSQL-compatible serverless database)
- **ORM**: Drizzle ORM for type-safe database operations
- **Migrations**: Drizzle Kit for schema management
- **Connection**: @neondatabase/serverless for optimized serverless connections

## UI and Styling
- **CSS Framework**: Tailwind CSS for utility-first styling
- **Component Library**: Radix UI primitives for accessible, unstyled components
- **Icons**: Lucide React and React Icons for comprehensive icon coverage
- **Fonts**: Google Fonts (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)

## Development Tools
- **Build Tools**: Vite for frontend bundling, esbuild for server bundling
- **TypeScript**: Full TypeScript support with strict configuration
- **Linting**: ESLint and Prettier configurations for code quality
- **Replit Integration**: Specialized plugins for Replit development environment

## Form and Validation
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for runtime type validation and schema parsing
- **UI Integration**: Form components integrated with Shadcn/ui design system

## Utility Libraries
- **Class Management**: clsx and tailwind-merge for conditional CSS classes
- **Date Handling**: date-fns for date manipulation and formatting
- **Styling Utilities**: class-variance-authority for component variant management
- **Security**: bcrypt.js for password hashing, nanoid for unique ID generation