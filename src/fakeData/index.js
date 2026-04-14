import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Read all product files
const productsDir = path.join(__dirname, "products");
const productFiles = fs
  .readdirSync(productsDir)
  .filter((file) => file.endsWith(".json"));

// Load all products
const products = productFiles.map((file) => {
  const filePath = path.join(productsDir, file);
  const productData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(productData);
});

// Shuffle the products
const shuffledProducts = shuffleArray(products);

// Export the shuffled products
export default shuffledProducts;
