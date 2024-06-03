const fs = require("fs");
const folderName = "10";

if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
}

const filesArray = [];
for (let j = 0; j < 10; j++) {
  filesArray.push(
    "https://copper-central-halibut-875.mypinata.cloud/ipfs/QmZvEeV5KiZnvBP4iyVjX2GATx84RyqKxa7qebSTs3zX2K/3994.jpg"
  );
}

const jsonObject = {
  _id: {
    $oid: "65f207407ebf1ac224cc46d3",
  },
  launchpadId: {
    $oid: "65f1dacbb4525aaa70872c2c",
  },
  creatorId: {
    $oid: "65f1d2847ebf1ac224cc1945",
  },
  files: filesArray,
};

const jsonString = JSON.stringify(jsonObject, null, 2);
const fileName = `${folderName}/1.json`;

fs.writeFileSync(fileName, jsonString);

console.log(`${fileName} created successfully.`);
