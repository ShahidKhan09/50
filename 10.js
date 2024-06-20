const fs = require("fs");
const folderName = "Hazmat Suit Male";

if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
}

for (let i = 0; i <= 1200; i++) {
  const jsonObject = {
    name: "Land of Warriors",
    description: "Core Collection Land of Warriors 70 NFTs.",
    image: `/QmUwDUP7mVJXYWhev3nG8mtm4uDQWrhf9T7GDbm3rbZrpP/${i + 1}.jpg`,
  };

  const jsonString = JSON.stringify(jsonObject, null, 2);
  const fileName = `${folderName}/${i}.json`;

  fs.writeFileSync(fileName, jsonString);

  console.log(`${fileName} created successfully.`);
}
