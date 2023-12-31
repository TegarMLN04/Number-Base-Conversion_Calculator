// code untuk mengambil aksi input click button pada welcome.html
document.getElementById('back-button').addEventListener('click', function() { window.location.href = "welcome.html";});

// Fungsi Konversi Utama
function convert() {
   const numberInput = document.getElementById('number');
   const resultInput = document.getElementById('result');
   const conversionTypeSelect = document.getElementById('conversion-type');
   
   const numberValue = numberInput.value;
   const conversionType = conversionTypeSelect.value;
 
   const result = performConversion(numberValue, conversionType);
   resultInput.value = result;
 }
 
// Fungsi Reset button
function resetNumber() {
  const numberInput = document.getElementById('number');
  numberInput.value = '';
  const resultInput = document.getElementById('result');
  resultInput.value = '';
 }
 
 
 // Fungsi Konversi Umum
 function performConversion(number, conversionType) {
   if (conversionType === 'decimalToBinary') {
     return convertDecimalToBinary(number);
   } else if (conversionType === 'decimalToOctal') {
     return convertDecimalToOctal(number);
   } else if (conversionType === 'decimalToHex') {
     return convertDecimalToHex(number);
   } else if (conversionType === 'binaryToDecimal') {
     return convertBinaryToDecimal(number);
   } else if (conversionType === 'binaryToOctal') {
     return convertBinaryToOctal(number);
   } else if (conversionType === 'binaryToHex') {
     return convertBinaryToHex(number);
   } else if (conversionType === 'octalToDecimal') {
     return convertOctalToDecimal(number);
   } else if (conversionType === 'octalToBinary') {
     return convertOctalToBinary(number);
   } else if (conversionType === 'octalToHex') {
     return convertOctalToHex(number);
   } else if (conversionType === 'hexToDecimal') {
     return convertHexToDecimal(number);
   } else if (conversionType === 'hexToBinary') {
     return convertHexToBinary(number);
   } else if (conversionType === 'hexToOctal') {
     return convertHexToOctal(number);
   } else {
     alert('Pilih jenis konversi yang valid.');
     return '';
   }
 }
 
 // Fungsi Konversi Masing-masing operasi
 // Konversi Desimal ke basis lainnya
 function convertDecimalToBinary(decimal) {
   if (/^\d+$/.test(decimal)) {
     return Number(decimal).toString(2);
   } else {
     alert('Masukkan angka desimal yang valid.');
     return '';
   }
 }
 
 function convertDecimalToOctal(decimal) {
   if (/^\d+$/.test(decimal)) {
     return Number(decimal).toString(8);
   } else {
     alert('Masukkan angka desimal yang valid.');
     return '';
   }
 }
 
 function convertDecimalToHex(decimal) {
   if (/^\d+$/.test(decimal)) {
     return Number(decimal).toString(16).toUpperCase();
   } else {
     alert('Masukkan angka desimal yang valid.');
     return '';
   }
 }
 
 // Konversi Biner ke basis lainnya
 function convertBinaryToDecimal(binary) {
   if (/^[01]+$/.test(binary)) {
     return parseInt(binary, 2).toString();
   } else {
     alert('Masukkan angka biner yang valid.');
     return '';
   }
 }
 
 function convertBinaryToOctal(binary) {
   if (/^[01]+$/.test(binary)) {
     return parseInt(binary, 2).toString(8);
   } else {
     alert('Masukkan angka biner yang valid.');
     return '';
   }
 }
 
 function convertBinaryToHex(binary) {
   if (/^[01]+$/.test(binary)) {
     return parseInt(binary, 2).toString(16).toUpperCase();
   } else {
     alert('Masukkan angka biner yang valid.');
     return '';
   }
 }
 
 // Konversi Oktal ke basis lainnya
 function convertOctalToDecimal(octal) {
   if (/^[0-7]+$/.test(octal)) {
     return parseInt(octal, 8).toString();
   } else {
     alert('Masukkan angka oktal yang valid.');
     return '';
   }
 }
 
 function convertOctalToBinary(octal) {
   if (/^[0-7]+$/.test(octal)) {
     return parseInt(octal, 8).toString(2);
   } else {
     alert('Masukkan angka oktal yang valid.');
     return '';
   }
 }
 
 function convertOctalToHex(octal) {
   if (/^[0-7]+$/.test(octal)) {
     return parseInt(octal, 8).toString(16).toUpperCase();
   } else {
     alert('Masukkan angka oktal yang valid.');
     return '';
   }
 }
 
 // Konversi Heksadesimal ke basis lainnya
 function convertHexToDecimal(hex) {
   if (/^[0-9A-Fa-f]+$/.test(hex)) {
     return parseInt(hex, 16).toString();
   } else {
     alert('Masukkan angka heksadesimal yang valid.');
     return '';
   }
 }
 
 function convertHexToBinary(hex) {
   if (/^[0-9A-Fa-f]+$/.test(hex)) {
     return parseInt(hex, 16).toString(2);
   } else {
     alert('Masukkan angka heksadesimal yang valid.');
     return '';
   }
 }
 
 function convertHexToOctal(hex) {
   if (/^[0-9A-Fa-f]+$/.test(hex)) {
     return parseInt(hex, 16).toString(8);
   } else {
     alert('Masukkan angka heksadesimal yang valid.');
     return '';
   }
 }
 