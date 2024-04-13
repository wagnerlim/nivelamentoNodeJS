import { readFile } from "fs/promises";

async function getJsonData() {
  const data = await readFile("./basic/values.json");
  return JSON.parse(data);
}

async function sampleString() {
  const data = await getJsonData();
}

sampleString();
