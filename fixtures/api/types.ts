/**
 * Shared TypeScript types for API request fixtures.
 * Add Zod schemas and request/response interfaces here.
 */
export type ApiResponse<T> = {
  data: T;
  status: number;
};
