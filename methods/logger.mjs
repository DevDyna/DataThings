import * as data from './data.mjs';
import fs from 'fs';
const path = 'log'
    const log_name = 'log'

//-----------------------------------------------------------------------------------//
    export function init_log() {
    if (!dirExist(path)) {
        makedir(path)
    }

    if (isExist(`${path}/${log_name}.txt`)) {
        let hour = ((data.getTime() + '_' + data.getDate()).replace(/[:\s]/g, '_')).replace(/ /g, '_')
        rename(`${path}/${log_name}.txt`, `${path}/${log_name}_${hour}.txt`)
    }
}
//-----------------------------------------------------------------------------------//
export function log(string) {
    return write(`${path}/${log_name}.txt`, `[${data.getTime()}][${data.getDate()}] ${string}\n`)
}
//-----------------------------------------------------------------------------------//
export function write(url, content) {
    let bool = true
        try {

            if (isExist(url)) {
                // Append the content to the file
                fs.appendFileSync(url, content);
            } else {
                // Create the file and write the content
                fs.writeFileSync(url, content);
            }

        } catch (e) {
            bool = false //error writing file
        }
        return bool
}
//-----------------------------------------------------------------------------------//
export function isExist(filePath) {
    return fs.existsSync(filePath);
}
//-----------------------------------------------------------------------------------//
export function rename(init, fin) {
    fs.renameSync(init, fin, (err) => {
        if (err) {
            return false //error
        } else {
            return true //success
        }
    });
}
//-----------------------------------------------------------------------------------//
export function makedir(name) { //name of file or directory+name like /path/folderName
    try {
        fs.mkdirSync(name);
        return true
    } catch (err) {
        return false
    }
}
//-----------------------------------------------------------------------------------//
export function dirExist(path) {
    return fs.existsSync(path);
}
//-----------------------------------------------------------------------------------//
