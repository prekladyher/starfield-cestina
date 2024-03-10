import { defineConfig } from "vitepress"
import FastGlob from "fast-glob";
import grayMatter from "gray-matter";
import { readFile } from "node:fs/promises";
import { basename } from "node:path";

const posts: any[] = [];
for (const source of await FastGlob("novinky/*-*.md")) {
  const content = await readFile(source, "utf-8");
  const matter = grayMatter(content);
  posts.push({
    text: matter.data.title,
    link: `/novinky/${basename(source, ".md")}.html`
  });
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Starfield – Čeština",
  description: "Stránka fanouškovského překladu hry Starfield.",
  base: "/starfield-cestina/",
  head: [
    ["link", { rel: "icon", href: "/starfield-cestina/favicon.ico" }],
  ],
  themeConfig: {
    docFooter: {
      prev: 'Předchozí stránka',
      next: 'Následující stránka'
    },

    darkModeSwitchLabel: "Vzhled",

    nav: [
      { text: "Úvod", link: "/" },
      { text: "Novinky", link: "/novinky/", activeMatch: "/novinky/" },
    ],

    outline: {
      label: "Obsah"
    },

    sidebar: {
      "/novinky/": posts
    },

    socialLinks: [
      { icon: "facebook", link: "https://www.facebook.com/profile.php?id=61556872838453" },
      { icon: "instagram", link: "https://www.instagram.com/starfield.cestina/" },
      { icon: "github", link: "https://github.com/prekladyher/starfield-preklad" }
    ]
  }
});
