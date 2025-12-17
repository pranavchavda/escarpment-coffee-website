import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function fetchData() {
  try {
    console.log('Fetching coffee data from iDrinkCoffee.com...');
    const response = await fetch('https://idrinkcoffee.com/collections/coffee.json');
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Ensure public directory exists
    const publicDir = path.resolve(__dirname, '../client/public/data');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Save to client/public/data/coffee.json
    const outputPath = path.join(publicDir, 'coffee.json');
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    
    console.log(`Successfully saved coffee data to ${outputPath}`);
  } catch (error) {
    console.error('Error fetching data:', error);
    process.exit(1);
  }
}

fetchData();
