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
//-----------------------------------------------------------------------------------//
