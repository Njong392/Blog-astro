import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Blog",
    description: "My new blog made with astro",
    site: "https://blog-astro-gamma.vercel.app/",
    items: import.meta.glob("./**/*.md"),
    customData: `<language>en-us</language>`,
  });
