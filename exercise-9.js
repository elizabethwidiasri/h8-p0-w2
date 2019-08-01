// MENGENAL PENGGUNAAN FUNCTION

// Tugas 1

function shoutOut(text1, text2){

    var text1;
    var text2;
    var sentence; 

 sentence = text1 + text2;
 
 return sentence;
}
 

console.log(shoutOut('Halo ', 'Function!'));
// menampilkan "Halo Function!"


// Tugas 2

function calculateMultiply(num1, num2) {

   
    
    kalkulasi = num1 * num2;

    return kalkulasi;
}

var num1 = 5;
var num2 = 6;

var kalkulasi; 

var hasilPerkalian = calculateMultiply(num1, num2);

console.log(hasilPerkalian);
// menampilkan angka 30


// Tugas 3

function processSentence(name, age, address, hobby) {

    return 'Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!';
} 

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogyakarta";
var hobby = "gaming";

var fullSentence = processSentence(name, age, address, hobby);

console.log(fullSentence);

// Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"

