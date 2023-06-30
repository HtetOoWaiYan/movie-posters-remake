import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://movieposters.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://movieposters.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://movieposters.vercel.app/posters/268",
      lastModified: new Date(),
    },
    {
      url: "https://movieposters.vercel.app/posters/268/cij4dd21v2Rk2YtUQbV5kW69WB2",
      lastModified: new Date(),
    },
    {
      url: "https://movieposters.vercel.app/?q=batman",
      lastModified: new Date(),
    },
    {
      url: "https://movieposters.vercel.app/posters/268?q=batman",
      lastModified: new Date(),
    },
    {
      url: "https://movieposters.vercel.app/posters/268/cij4dd21v2Rk2YtUQbV5kW69WB2?q=batman",
      lastModified: new Date(),
    },
  ];
}
