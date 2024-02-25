import { defineConfig } from "vitepress";
import fs from "node:fs";
import path from "node:path";
function walkDir(
  dir: string,
  callback: (filePath: string, stat: fs.Stats) => void
) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else {
      callback(filePath, stat);
    }
  });
}
interface NavItem {
  text: string;
  link?: string;
  items?: NavItem[];
}
function generateNav(
  dir: string,
  parentLink = "",
  excludedDirs: string[] = []
): NavItem[] {
  const nav: NavItem[] = [];
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (excludedDirs.includes(file)) {
        return; // Skip excluded directory
      }
      const childLink = path.join(parentLink, file, "/");
      const children = generateNav(filePath, childLink, excludedDirs);
      if (children.length > 0) {
        nav.push({ text: file, items: children });
      }
    } else if (file.endsWith(".md") && file !== "index.md") {
      const fileName = file.replace(/\.md$/, "");
      const fileLink = path.join(parentLink, fileName);
      nav.push({ text: fileName, link: fileLink });
    }
  });

  return nav;
}

const nav = generateNav("./docs", "", ["public", "index"]);

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "蓝莓笔记",
  description: "html,css,php,golang,typescript",
  base: "/learn",
  srcDir: "./docs",
  themeConfig: {
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
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
