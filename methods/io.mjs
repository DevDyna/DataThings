import fs from 'fs';
//-----------------------------------------------------------------------------------//
export function JsonArray(url) { //'tags/acacia_door.json'
    return JSON.parse(fs.readFileSync(url));
}
//-----------------------------------------------------------------------------------//
export function getAllFromDir(url) { //'./tests/'
    let list = []
    fs.readdirSync(url).forEach(file => {
        list.push(file)
    });
    return list
}
//-----------------------------------------------------------------------------------//
export function mkFile(url,content) {
	let bool = true;
    try {
        fs.writeFileSync(url, content);
    } catch (e) {
        bool = false //error writing file
    }
    return bool
}
//-----------------------------------------------------------------------------------//
export function mkDir(url){
	let bool = true
	try{
	fs.mkdirSync(url)
	}catch(e){
		bool = false
	}
	return bool
}
//-----------------------------------------------------------------------------------//
export function isDir(url){
  try {
    return fs.statSync(url).isDirectory();
  } catch (error) {
    return false;
  }
}
//-----------------------------------------------------------------------------------//
export function rawWrite(url, content){
    let bool = true
        try {
                // Create the file and write the content
                fs.writeFileSync(url, content);

        } catch (e) {
            bool = false //error writing file
        }
        return bool
}
//-----------------------------------------------------------------------------------//
export function rawAppend(url, content){
    let bool = true
        try {
                // Append the content to the file
                fs.appendFileSync(url, content);

        } catch (e) {
            bool = false //error writing file
        }
        return bool
}