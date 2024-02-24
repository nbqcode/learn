import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "ninja",
  description: "2024 外卖小哥 阿钦的个人帮助手册",
  srcDir: "./docs",
  base: "/learn",
  // mpa: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    // nav: [
    //   { text: "首页", link: "/" },
    //   {
    //     text: "typescript",
    //     activematch: "/typescript",
    //     link: "/typescript/index",
    //   },
    //   { text: "vue", activematch: "/vue", link: "/vue/index" },
    //   { text: "c++", activematch: "/c\\+\\+", link: "/c++/index" },
    //   { text: "java", activematch: "/java", link: "/java/index" },
    //   { text: "php", activematch: "/php", link: "/php/index" },
    //   { text: "golang", activematch: "/golang", link: "/golang/index" },
    //   { text: "物联网", activematch: "/物联网", link: "/物联网/index" },
    // ],
    // // sidebar: {
    // //   "/typescript": [
    // //     {
    // //       text: "guide",
    // //       collapsed: true,
    // //       items: [
    // //         { text: "开始", link: "/typescript/index" },
    // //         { text: "test", link: "/typescript/test" },
    // //       ],
    // //     },
    // //   ],
    // //   "/vue": [
    // //     {
    // //       text: "guide",
    // //     },
    // //   ],
    // // },

    // sociallinks: [{ icon: "github", link: "https://github.com/nbqcode" }],
  },
});
