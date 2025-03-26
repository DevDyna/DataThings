//-------------------------------------------------//
export function out(st) {
    process.stdout.write(st);
}
//-------------------------------------------------//
export function outln(st) {
    console.log(st);
}
//-------------------------------------------------//
export function array_out(ar,ln){
	for(var i=0;i<ar.length;i++){
		if(ln){
		outln(ar[i]);
		}else{
		out(ar[i]);
		}
	}
}
//-------------------------------------------------//
export function matrix_out(mtx,ln) {
    for (var x = 0; x < mtx.length; x++) {
		out("  ");//console fixer
        for (var y = 0; y < mtx[0].length; y++) {

            out(mtx[x][y]);
        }
		if(ln){
        out("\n");
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