import { cache } from "react";

export const getBaseUrl = cache(() =>
  process.env.BASE_URL
    ? process.env.BASE_URL
    : `http://localhost:${process.env.PORT ?? 3000}`
);
