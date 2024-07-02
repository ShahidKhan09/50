const fs = require("fs");
const path = require("path");

const folderName = "MetaData"; // Replace with your actual folder name Ok ?


// Ensure folder exists
if (!fs.existsSync(folderName)) {
  console.error(`Folder "${folderName}" does not exist.`);
  process.exit(1);
}

for (let i = 0; i <= 1200; i++) {
  const filePath = path.join(folderName, `${i}.json`);
  let jsonObject;

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    jsonObject = JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error parsing JSON in file: ${filePath}`, error);
    continue;
  }

  jsonObject.image = `/QmUwDUP7mVJXYWhev3nG8mtm4uDQWrhf9T7GDbm3rbZrpP/${i + 0}.jpg`;

  const jsonString = JSON.stringify(jsonObject, null, 2);
  fs.writeFileSync(filePath, jsonString);

  console.log(`${filePath} updated successfully.`);
}
