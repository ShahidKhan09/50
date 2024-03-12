const fs = require("fs");
const folderName = "wizard";

if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
}

for (let i = 1; i <= 2000; i++) {
  const jsonObject = {
    name: "Core Journey Ticket",
    description: "Wizard NFts Json",
    image: `https://copper-central-halibut-875.mypinata.cloud/ipfs/QmZ3uVoSzYcmUinEUzvcS7tXJciQo4DyahiKxBzBN4rk5x/1.png`,
  };

  const jsonString = JSON.stringify(jsonObject, null, 2);
  const fileName = `${folderName}/${i}.json`;

  fs.writeFileSync(fileName, jsonString);

  console.log(`${fileName} created successfully.`);
}
