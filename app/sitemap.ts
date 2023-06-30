import { MetadataRoute } from "next";
import { getBaseUrl } from "#/lib/getEnv";

const baseUrl = getBaseUrl();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/posters/268`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/posters/268/cij4dd21v2Rk2YtUQbV5kW69WB2`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/?q=batman`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/posters/268?q=batman`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/posters/268/cij4dd21v2Rk2YtUQbV5kW69WB2?q=batman`,
      lastModified: new Date(),
    },
  ];
}
