const fs = require("fs");
const path = require("path");

function duplicateImages() {
  const originalImage = "1.png";
  const numberOfDuplicates = 2000;
  const folderName = "images";

  // Create a folder for duplicated images if it doesn't exist
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }

  for (let i = 1; i <= numberOfDuplicates; i++) {
    const duplicateFileName = path.join(folderName, `${i}.png`);

    // Read the original image file
    const originalImageBuffer = fs.readFileSync(originalImage);

    // Write the duplicate image file
    fs.writeFileSync(duplicateFileName, originalImageBuffer);
  }
}

// Call the function to create duplicates
duplicateImages();
