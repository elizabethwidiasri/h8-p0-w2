// LOOPING

//1. Melakukan Looping dengan menggunakan while



var A = 0
var B = 20

console.log('LOOPING PERTAMA');
while(A<20) {
    A+=2;
    console.log(A + ' - I love coding');
}
console.log('LOOPING KEDUA');
while(B>=2) {
    console.log(B + ' - I will become fullstack developer')
    B-=2;
}

//2. Melakukan Looping Menggunakan For

var A = ''
var B = 20

console.log('LOOPING PERTAMA');
for(A>=1; A<=20; A++) {
    console.log(A + ' - I love coding');
}
console.log('LOOPING KEDUA');
for(B=20; B>=1; B--) {
    console.log(B + ' - I will become fullstack developer');
}

//3. Angka Ganjil dan Genap

for(A=1; A<=100; A++) {
    if(A%2 == 0 ) {
        console.log("GENAP");
    } else {
        console.log("GANJIL");
    }
}

for(A=1; A<=100; A+=2) {
    if(A%3 == 0) {
        console.log(A + ' kelipatan 3');
    }
}


for(A=1; A<=100; A+=5){
    if(A%6 == 0) {
        console.log(A + ' kelipatan 6');
    }
}

for(A=1; A<=100; A+=9){
    if(A%10 == 0) {
        console.log(A + ' kelipatan 10')
    }
}