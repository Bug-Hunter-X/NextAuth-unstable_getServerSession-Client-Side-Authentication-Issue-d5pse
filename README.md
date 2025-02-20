# NextAuth unstable_getServerSession Client-Side Authentication Issue

This repository demonstrates a common issue encountered when using the `unstable_getServerSession` function from the NextAuth.js library. The issue occurs when attempting to access the session from the client-side, leading to unexpected behavior and potential authentication errors.

## Problem

The `unstable_getServerSession` function is designed to work exclusively on the server-side. Attempting to use it directly in a client-side component or context will result in the session variable being undefined or returning an incorrect state.

This leads to: 
- Unexpected authentication behavior.
- Errors related to undefined session data.
- Potential security vulnerabilities if incorrect authorization logic is implemented based on a faulty session value.

## Solution

The correct way to access session data on the client-side is to fetch it from an API route, which will handle the server-side authentication logic using `unstable_getServerSession`. This ensures consistent and accurate data and prevents client-side errors.

## How to reproduce the bug

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Access the `/protected` route in your browser. 
5. Observe that the initial render displays a message indicating that the session is undefined or incorrect, demonstrating the authentication failure.

## How to fix the bug

1. Implement an API route which fetches the session using `unstable_getServerSession`
2. Consume that API route from the client side