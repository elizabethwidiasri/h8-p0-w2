// LOOPING

//1. Menyusun Barisan Bintang

var rows1=5;


for (var i=0; i<rows1; i++) {
    console.log('*');
}
console.log('\n');

//2. Menyusun Barisan Bintang dengan Nested Looping

var rows2=5;


for (i=0; i<rows2; i++) {
    var asterisks='';
    for(var k=0; k<rows2; k++) {
        asterisks = asterisks + '*'
    }
    console.log(asterisks);
} 
console.log('\n')

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3=5;
var asterisks='';


for (i=0; i<rows3; i++) {
    for(var l=0; l<rows3; l+=rows3) {
        asterisks = asterisks + '*'
    }
    console.log(asterisks);
} 