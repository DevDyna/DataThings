import fs from "fs";
//-----------------------------------------------------------------------------------//
/**
 *
 * @param {string} url json url
 * @returns array
 */
export function JsonArray(url) {
  //'tags/acacia_door.json'
  return JSON.parse(fs.readFileSync(url));
}
//-----------------------------------------------------------------------------------//
export function getAllFromDir(url) {
  //'./tests/'
  let list = [];
  fs.readdirSync(url).forEach((file) => {
    list.push(file);
  });
  return list;
}
//-----------------------------------------------------------------------------------//
/**
 *
 * @param {string} url
 * @param {string} content {data:01} to stringify
 * @returns error
 */
export function mkFile(url, content,silent) {
  let bool = true;
  if(typeof silent == undefined)silent = false
  try {
    fs.writeFileSync(url, JSON.stringify(content, null, 2));
  } catch (e) {
    if(silent)
    console.log(e);
    bool = false; //error writing file
  }
  return bool;
}
//-----------------------------------------------------------------------------------//
export function mkDir(url, silent) {
  let bool = true;
  if(typeof silent == undefined)silent = false
  try {
    fs.mkdirSync(url);
  } catch (e) {
    if(silent)
    console.log(e);
    bool = false;
  }
  return bool;
}
//-----------------------------------------------------------------------------------//
export function isDir(url) {
  try {
    return fs.statSync(url).isDirectory();
  } catch (error) {
    return false;
  }
}
//-----------------------------------------------------------------------------------//
export function rawWrite(url, content) {
  let bool = true;
  try {
    // Create the file and write the content
    fs.writeFile(url, content);
  } catch (e) {
    console.log(e);
    bool = false; //error writing file
  }
  return bool;
}
//-----------------------------------------------------------------------------------//
export function rawAppend(url, content) {
  let bool = true;
  try {
    // Append the content to the file
    fs.appendFileSync(url, content);
  } catch (e) {
    console.log(e);
    bool = false; //error writing file
  }
  return bool;
}
