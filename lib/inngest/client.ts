import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "My-finance-platform", // Unique app ID
  name: "My Finance Platform",
  retryFunction: async (attempt : number) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
