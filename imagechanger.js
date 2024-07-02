const fs = require("fs");
const path = require("path");

const folderName = "MetaData"; // Replace with your actual folder name Ok ?


// Ensure folder exists
if (!fs.existsSync(folderName)) {
  console.error(`Folder "${folderName}" does not exist.`);
  process.exit(1);
}

for (let i = 18000; i <= 21000; i++) {
  const filePath = path.join(folderName, `${i}.json`);
  let jsonObject;

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    jsonObject = JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error parsing JSON in file: ${filePath}`, error);
    continue;
  }

  jsonObject.image = `ipfs://QmPs4u7ZGh7wwxmSRkMHbCCYJTFp4WBUHAw7VUHNcHFx8X/${i + 0}.png`;

  const jsonString = JSON.stringify(jsonObject, null, 2);
  fs.writeFileSync(filePath, jsonString);

  console.log(`${filePath} updated successfully.`);
}
