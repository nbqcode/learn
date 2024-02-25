import { defineConfig } from "vitepress";
import fs from "node:fs";
import path from "node:path";
import sidebar from "./generateSidebar";
import nav from "./generateNavbar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "蓝莓笔记",
  description: "html,css,php,golang,typescript",
  base: "/learn",
  srcDir: "./docs",
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    nav: [
      {
        text: "首页",
        link: "/",
      },
      //@ts-ignore
      ...nav,
    ],
    sidebar,
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
