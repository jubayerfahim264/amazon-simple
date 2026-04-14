import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the products JSON file
const productsData = fs.readFileSync("./products.JSON", "utf8");
const products = JSON.parse(productsData);

// Create individual product files
products.forEach((product) => {
  const fileName = `${product.key}.json`;
  const filePath = path.join("./products", fileName);
  fs.writeFileSync(filePath, JSON.stringify(product, null, 2));
});

console.log("Individual product files created successfully!");
