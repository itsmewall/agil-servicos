import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://agilservicosbr.com.br";
  
  const routes = [
    "",
    "/sobre",
    "/servicos",
    "/blog",
    "/contato",
    "/politica-de-privacidade",
    "/termos-de-uso",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
