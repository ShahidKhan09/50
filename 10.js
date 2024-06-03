const fs = require("fs");
const folderName = "Land of Warriors json";

if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
}

for (let i = 0; i <= 69; i++) {
  const jsonObject = {
    name: "Land of Warriors",
    description: "Core Collection Land of Warriors 70 NFTs.",
    image: `/QmaiZEUQTBThTE2dtvJQEBt7XkGxzHLxQcPeHXLUQgEgeY/${i + 1}.jpg`,
  };

  const jsonString = JSON.stringify(jsonObject, null, 2);
  const fileName = `${folderName}/${i}.json`;

  fs.writeFileSync(fileName, jsonString);

  console.log(`${fileName} created successfully.`);
}
