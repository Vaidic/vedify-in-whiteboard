# Whiteboard App with Next.js 14, WebSockets, Clerk, and Chakra UI

Welcome to the **Whiteboard App** repository! This project is designed to provide a collaborative whiteboarding experience using modern web technologies such as Next.js 14, WebSockets, Clerk for authentication, and Chakra UI for UI components.

## Features

- **Real-time Collaboration**: Use WebSockets to enable real-time collaboration among multiple users on the same canvas.
- **Authentication**: Utilize Clerk for secure user authentication and management.
- **UI Design**: Leverage Chakra UI for a responsive and modern user interface.

## Technologies Used

- **Next.js 14**: A React framework for server-side rendering and static site generation.
- **WebSockets**: For real-time communication between the client and server.
- **Clerk**: For secure authentication and session management.
- **Chakra UI**: For building beautiful, responsive user interfaces.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (or yarn)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/whiteboard-app.git
   cd whiteboard-app
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Create a `.env` file in the root directory and add your Clerk API keys (if necessary):
   ```plaintext
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
   CLERK_SECRET_KEY=your-clerk-secret-key
   ```
4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration

### Environment Variables

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key.
- `CLERK_SECRET_KEY`: Your Clerk secret key.

## License

[GNU General Public License v3.0](./LICENSE)
