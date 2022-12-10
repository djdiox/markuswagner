import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Markus Wagner's Homepage",
      description: "Hi! just want to introduce myself and some tools I use, built, extend or even self build!!",
    },
    // "/de/": {
    //   lang: "de",
    //   title: "Markus Wagner's Homepage",
    //   description: "Hallo! Ich wollte mich hiermit vorstellen und tools die ich benutze, erweitere oder sogar von mir gebaut wurden!",
    // },
  },

  theme,

  shouldPrefetch: true,
});
 