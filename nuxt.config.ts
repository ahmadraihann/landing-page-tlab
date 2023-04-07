// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "TLab",
      meta: [{ name: "description", content: "TLab" }],
      link: [{ rel: "icon", type: "image/x-icon", href: "/icon.ico" }],
    },
  },
});
