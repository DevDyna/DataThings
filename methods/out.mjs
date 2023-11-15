import * as cl from './colors.mjs';
import * as log from './logger.mjs';
//-------------------------------------------------//
export function out(st,silent) {
if(!silent)
log.log(st)
    process.stdout.write(st);
}
//-------------------------------------------------//
export function outln(st,silent) {
if(!silent)
log.log(st)
    console.log(st);
}
//-------------------------------------------------//
export function array_out(ar,ln,silent){
	for(var i=0;i<ar.length;i++){
		if(ln){
		outln(ar[i],silent);
		}else{
		out(ar[i],silent);
		}
	}
}
//-------------------------------------------------//
export function matrix_out(mtx,ln,silent) {
    for (var x = 0; x < mtx.length; x++) {
		out("  ",silent);//console fixer
        for (var y = 0; y < mtx[0].length; y++) {

            out(mtx[x][y],silent);
        }
		if(ln){
        out("\n",silent);
		}
    }
}
//-------------------------------------------------//
export function decor(num) {
    for (var i = 0; i < num; i++) {
        out("-",true)
    }
    outln("|",true)
}
//-------------------------------------------------//