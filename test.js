const fs = require("fs");
const path = require("path");

// function to read and parse the JSON file
function parseJsonFile(filePath) {
  // check if the file exists
  if (!fs.existsSync(filePath)) {
    console.error(`File ${filePath} does not exist.`);
    return;
  }

  // read the JSON file
  try {
    const data = fs.readFileSync(filePath, "utf8");
    const jsonData = JSON.parse(data);

    // replace the name with the classname
    jsonData.tests.forEach((test) => {
      test.file = `${prefix}${test.classname}`;
    });

    // print the modified JSON
    console.log(JSON.stringify(jsonData, null, 4));

    // write the modified JSON back to the file
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 4));
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
}

// get the file path from the command line arguments
const filePath = process.argv[2];
const prefix = process.argv[3] || "";

if (!filePath) {
  console.log("Please provide a file path as an argument.");
} else {
  parseJsonFile(filePath);
}
