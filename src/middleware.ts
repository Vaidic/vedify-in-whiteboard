import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// This configuration object defines the matcher patterns for the middleware.
// The `matcher` property is an array of strings that represent the paths where the middleware should be applied.

// The patterns used in the `matcher` are:
// 1. "/((?!.*\\..*|_next).*)" - Matches all paths except those containing a dot (.) or starting with "_next".
// 2. "/" - Matches the root path.
// 3. "/(api|trpc)(.*)" - Matches all paths starting with "api" or "trpc".

// These patterns ensure that the middleware is applied to all pages except static files and Next.js internals, 
// and also specifically includes API and TRPC routes.


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};