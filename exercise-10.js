function bandingkanAngka(angka1, angka2) {
 
   
    var compare;

    if (angka1 < angka2) {
        compare = true;
    } else if (angka1 === angka2) {
        compare = -1;
    } else {
        compare = false;
    }

    return compare;
}
console.log(bandingkanAngka(5, 8)); //true
console.log(bandingkanAngka(5, 3)); //false
console.log(bandingkanAngka(4, 4)); //-1
console.log(bandingkanAngka(3, 3)); //-1
console.log(bandingkanAngka(17, 2)); //false
