const fs = require("fs");
const folderName = "POAP";

if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
}

for (let i = 0; i <= 999; i++) {
  const jsonObject = {
    name: "Core University Roadshow POAP",
    description: "POAP NFTs for Pakistan University Roadshow...",
    image: `/QmaCqzfkmh6XyYRVWAWehBvNtgQAjoSLYZmdciQXQEWo6X`,
    // image: `/QmUwDUP7mVJXYWhev3nG8mtm4uDQWrhf9T7GDbm3rbZrpP/${i + 1}.jpg`,
  };

  const jsonString = JSON.stringify(jsonObject, null, 2);
  const fileName = `${folderName}/${i}.json`;

  fs.writeFileSync(fileName, jsonString);

  console.log(`${fileName} created successfully.`);
}
