import * as fs from "fs";
import * as path from "path";

interface NavbarItem {
  text: string;
  link: string;
  children?: NavbarItem[];
}

function generateNavbar(dir: string, base: string = ""): NavbarItem[] {
  const navbarItems: NavbarItem[] = [];

  const indexPath = path.join(dir, "index.md");
  if (fs.existsSync(indexPath)) {
    const text = base === "/" ? "Home" : path.basename(base);
    navbarItems.push({
      text: text,
      link: base === "/" ? "/" : base + "/",
    });
  }

  fs.readdirSync(dir).forEach((item) => {
    const itemPath = path.join(dir, item);
    const isDirectory = fs.statSync(itemPath).isDirectory();
    if (isDirectory) {
      const subDirNavbar = generateNavbar(itemPath, `${base}/${item}`);
      if (subDirNavbar.length > 0) {
        navbarItems.push(...subDirNavbar);
      }
    }
  });

  return navbarItems;
}

const navbarConfig = generateNavbar("./docs");

export default navbarConfig;
