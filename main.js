document.querySelector('h1').textContent = "I'm on the page!";
document.querySelector('h1').innerHTML = "<p>halo</p>";
console.log("5" == 5); // akan menampilkan true

console.log("5" === 5); // akan menampilkan false
var myHeight; // isi dengan angka berapapun

myHeight = 60;

if (myHeight < 160) {
    console.log(" hore, saya bisa naik roller coaster! ");
} else {
    console.log(" yasudah, saya naik komedi putar saja deh. ");
}

console.log(" Sudah sore. Pulang yuk! ");

var flag = 1;
while(flag < 10) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
  console.log('Iterasi ke-' + flag); // Menampilkan nilai flag pada iterasi tertentu
  flag++; // Mengubah nilai flag dengan menambahkan 1
}

var deret = 5;
var jumlah = 0;
while(deret > 0) { // Loop akan terus berjalan selama nilai deret masih di atas 0
  jumlah += deret; // Menambahkan nilai variable jumlah dengan angka deret
  deret--; // Mengubah nilai deret dengan mengurangi 1
  console.log('Jumlah saat ini: ' + jumlah)
}

console.log(jumlah);

var x = 9;
Math.abs(x)

var angka2 = Math.ceil(1.99); // angka2 = 2
var angka1 = Math.ceil(0.1);  // angka1 = 1
var angka0 = Math.ceil(-0.1); // angka0 = 0

Math.floor(angka2)

console.log(angka2)

var random = Math.random(); 
console.log(random)