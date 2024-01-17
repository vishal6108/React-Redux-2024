const fs = require("node:fs/promises");

async function readEventFile() {
  const data = await fs.readFile("events.json", "utf8");
  return JSON.parse(data);
}

async function writeEventFile(data) {
  await fs.writeFile("events.json", JSON.stringify(data));
}

exports.readEventFile = readEventFile;
exports.writeEventFile = writeEventFile;
