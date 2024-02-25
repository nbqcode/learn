import { defineConfig } from "vitepress";
import fs from "node:fs";
import path from "node:path";
import sidebar from "./generateSidebar";
import nav from "./generateNavbar";
console.log(JSON.stringify(nav));

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
      ...nav.items,
    ],
    sidebar,
    socialLinks: [
      { icon: "github", link: "https://github.com/nbqcode" },
      { icon: "discord", link: "" },
      { icon: "npm", link: "https://www.npmjs.com/~artistliao" },
      {
        icon: {
          svg: '<svg t="1708870282868" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4257" width="200" height="200"><path d="M937.4 423.9c-84 0-165.7-27.3-232.9-77.8v352.3c0 179.9-138.6 325.6-309.6 325.6S85.3 878.3 85.3 698.4c0-179.9 138.6-325.6 309.6-325.6 17.1 0 33.7 1.5 49.9 4.3v186.6c-15.5-6.1-32-9.2-48.6-9.2-76.3 0-138.2 65-138.2 145.3 0 80.2 61.9 145.3 138.2 145.3 76.2 0 138.1-65.1 138.1-145.3V0H707c0 134.5 103.7 243.5 231.6 243.5v180.3l-1.2 0.1" p-id="4258"></path></svg>',
        },
        link: "",
      },
      {
        icon: {
          svg: '<svg t="1708870468001" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6256" width="200" height="200"><path d="M512 16C238 16 16 238 16 512s222 496 496 496 496-222 496-496S786 16 512 16z m243.6 339.8l-81.4 383.6c-6 27.2-22.2 33.8-44.8 21l-124-91.4-59.8 57.6c-6.6 6.6-12.2 12.2-25 12.2l8.8-126.2 229.8-207.6c10-8.8-2.2-13.8-15.4-5l-284 178.8-122.4-38.2c-26.6-8.4-27.2-26.6 5.6-39.4l478.2-184.4c22.2-8 41.6 5.4 34.4 39z" p-id="6257"></path></svg>',
        },
        ariaLabel: "cool link",
        link: "",
      },
      {
        icon: {
          svg: '<svg t="1708870569000" class="icon" viewBox="0 0 1242 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7269" width="200" height="200"><path d="M531.252288 0C248.42147 0 19.252288 229.169181 19.252288 512S248.42147 1024 531.252288 1024s512-229.169181 512-512S814.083107 0 531.252288 0zM389.527887 678.340777h234.31905c40.786964 0 73.952122-33.062161 73.952123-73.952123v-12.256689c0-13.595655-11.02072-24.719372-24.719373-24.719372H500.45607c-13.698652 0-24.719372-11.02072-24.719372-24.719372v-61.592436c0-13.698652 11.02072-24.719372 24.719372-24.719373H784.007871c13.595655 0 24.719372 11.02072 24.719372 24.719373v141.724401c0 91.976665-74.570107 166.443774-166.443774 166.443774H278.496706c-13.595655 0-24.719372-11.02072-24.719372-24.719372v-345.04124c0-102.070408 82.809897-184.880306 184.880305-184.880305H784.007871c13.698652 0 24.719372 11.02072 24.719372 24.719372l-0.102997 61.592436c0 13.698652-11.02072 24.719372-24.719373 24.719372H438.760637c-40.786964 0-73.952122 33.062161-73.952123 73.952123v234.216053c0 13.492657 11.02072 24.513378 24.719373 24.513378z" fill="#C2191F" p-id="7270"></path></svg>',
        },
        ariaLabel: "cool link",
        link: "",
      },
    ],
  },
});
