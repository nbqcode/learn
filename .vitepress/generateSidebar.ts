import * as fs from "fs";
import * as path from "path";

interface SidebarItem {
  text: string;
  link: string;
  items?: SidebarItem[];
}

interface Sidebar {
  [key: string]: SidebarItem[];
}

function generateSidebar(dir: string, base: string = ""): Sidebar {
  const sidebar: Sidebar = {};

  fs.readdirSync(dir).forEach((item) => {
    const itemPath = path.join(dir, item);
    const isDirectory = fs.statSync(itemPath).isDirectory();
    if (isDirectory) {
      sidebar[`${base}/${item}/`] = getSidebarItems(
        itemPath,
        `${base}/${item}`
      );
    } else if (path.extname(item) === ".md") {
      sidebar[base] = sidebar[base] || [];
      sidebar[base].push({
        text: item.replace(".md", ""),
        link: `${base}/${item.replace(".md", "")}`,
      });
    }
  });

  return sidebar;
}

function getSidebarItems(dir: string, base: string): SidebarItem[] {
  const sidebarItems: SidebarItem[] = [];

  fs.readdirSync(dir).forEach((item) => {
    const itemPath = path.join(dir, item);
    const isDirectory = fs.statSync(itemPath).isDirectory();
    if (isDirectory) {
      sidebarItems.push({
        text: item,
        link: `${base}/${item}/`,
        items: getSidebarItems(itemPath, `${base}/${item}`),
      });
    } else if (path.extname(item) === ".md") {
      if (item.includes("index")) {
        return;
      }
      sidebarItems.push({
        text: item.replace(".md", ""),
        link: `${base}/${item.replace(".md", "")}`,
      });
    }
  });

  return sidebarItems;
}

const sidebarConfig = generateSidebar("./docs");

export default sidebarConfig;
