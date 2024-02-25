import * as fs from "node:fs";
import * as path from "node:path";

interface TreeItem {
  text: string;
  link?: string;
  items?: TreeItem[];
}

function walkDir(dir: string, excludeDirs: string[] = []): TreeItem {
  const tree: TreeItem = {
    text: path.basename(dir),
  };

  // 读取目录内容
  const items = fs.readdirSync(dir);
  const hasSubdirectories = items.some((item) => {
    const itemPath = path.join(dir, item);
    return fs.statSync(itemPath).isDirectory() && !excludeDirs.includes(item);
  });

  if (hasSubdirectories) {
    // 如果有子目录，则递归地获取子目录的树形结构，并添加到当前目录的子节点中
    tree.items = items
      .filter((item) => {
        const itemPath = path.join(dir, item);
        return (
          fs.statSync(itemPath).isDirectory() && !excludeDirs.includes(item)
        );
      })
      .map((subDir) => walkDir(path.join(dir, subDir), excludeDirs));
  } else {
    // 如果没有子目录，则表示当前目录为最后一层目录，添加 link 字段
    tree.link = `${dir.replace(/docs/gi, "").replace(/\\/gi, "/")}/index`;
  }

  return tree;
}

const excludeDirs = ["public", "temp"]; // 要排除的目录名
const result = walkDir("./docs", excludeDirs);
export default result;
