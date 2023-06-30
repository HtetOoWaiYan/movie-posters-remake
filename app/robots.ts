import { MetadataRoute } from "next";
import { getBaseUrl } from "#/lib/getEnv";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: '/private/',
    },
    sitemap: `${getBaseUrl()}/sitemap.xml`,
  };
}
