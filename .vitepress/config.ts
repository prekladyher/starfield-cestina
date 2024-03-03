import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Starfield – Čeština",
  description: "Stránka fanouškovského překladu hry Starfield.",
  base: "/starfield-cestina/",
  head: [
    ["link", { rel: "icon", href: "/starfield-cestina/favicon.ico" }]
  ],
  themeConfig: {
    nav: [
      { text: "Úvod", link: "/" },
    ],

    outline: {
      label: "Obsah"
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/prekladyher/starfield-preklad" }
    ]
  }
})
