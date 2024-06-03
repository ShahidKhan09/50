const fs = require("fs");
const folderName = "9999";

if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
}

for (let i = 0; i <= 9999; i++) {
  const jsonObject = {
    name: "WoW #2",
    image: "ipfs://QmSTBRrNGPvQssSWenMiBQj7ZYue7DEwajAF4z5HDrLFV6",
    attributes: [
      {
        value: "Purple Pink",
        trait_type: "Background",
      },
      {
        value: "Deep Bronze",
        trait_type: "Skin Tone",
      },
      {
        value: "Green Straight",
        trait_type: "Eyes",
      },
      {
        value: "Cyber Warrior",
        trait_type: "Facial Features",
      },
      {
        value: "Curly Ponytail",
        trait_type: "Hairstyle",
      },
      {
        value: "Psychedelic Sunglasses",
        trait_type: "Face Accessories",
      },
      {
        value: "Sun Keeper",
        trait_type: "Necklace",
      },
      {
        value: "Striped Tee",
        trait_type: "Clothes",
      },
      {
        value: "Stern",
        trait_type: "Mouth",
      },
      {
        value: "Burgundy",
        trait_type: "Lips Color",
      },
    ],
  };

  const jsonString = JSON.stringify(jsonObject, null, 2);
  const fileName = `${folderName}/${i}.json`;

  fs.writeFileSync(fileName, jsonString);

  console.log(`${fileName} created successfully.`);
}
