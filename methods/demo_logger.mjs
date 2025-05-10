import * as log from './methods/logger.mjs';
import * as data from './methods/data.mjs';
import * as out from './methods/out.mjs';




export function run(){

	log.init_log()
	for(let i=0;i<10;i++){
	out.out(`Number: ${i}`,false)
	out.outln('',true)
	}
	log.log('log output')
	console.log('console output')
	
}