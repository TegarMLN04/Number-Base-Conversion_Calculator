function convert() { // Memulai Fungsi convert
  const numberInput = document.getElementById('number');
  const resultInput = document.getElementById('result');
  const conversionTypeSelect = document.getElementById('conversion-type');
  
  const numberValue = numberInput.value;
  const conversionType = conversionTypeSelect.value;

  if (conversionType === 'decimalToBinary') {
    resultInput.value = convertDecimalToBinary(numberValue);
   } else if (conversionType === 'decimalToOctal') {
    resultInput.value = convertDecimalToOctal(numberValue);
   } else if (conversionType === 'decimalToHex') {
    resultInput.value = convertDecimalToHex(numberValue);
   } else if (conversionType === 'binaryToDecimal') {
    if (/^[01]+$/.test(numberValue)) {
       resultInput.value = convertBinaryToDecimal(numberValue);
    } else {
       alert('Masukkan angka biner yang valid.');
    }
   } else if (conversionType === 'binaryToOctal') {
    if (/^[01]+$/.test(numberValue)) {
       resultInput.value = convertBinaryToOctal(numberValue);
    } else {
       alert('Masukkan angka biner yang valid.');
    }
   } else if (conversionType === 'binaryToHex') {
    if (/^[01]+$/.test(numberValue)) {
       resultInput.value = convertBinaryToHex(numberValue);
    } else {
       alert('Masukkan angka biner yang valid.');
    }
   } else if (conversionType === 'octalToDecimal') {
    if (/^[0-7]+$/.test(numberValue)) {
       resultInput.value = convertOctalToDecimal(numberValue);
    } else {
       alert('Masukkan angka oktal yang valid.');
    }
   } else if (conversionType === 'octalToBinary') {
    if (/^[0-7]+$/.test(numberValue)) {
       resultInput.value = convertOctalToBinary(numberValue);
    } else {
       alert('Masukkan angka oktal yang valid.');
    }
   } else if (conversionType === 'octalToHex') {
    if (/^[0-7]+$/.test(numberValue)) {
       resultInput.value = convertOctalToHex(numberValue);
    } else {
       alert('Masukkan angka oktal yang valid.');
    }
   } else if (conversionType === 'hexToDecimal') {
    if (/^[0-9A-Fa-f]+$/.test(numberValue)) {
       resultInput.value = convertHexToDecimal(numberValue);
    } else {
       alert('Masukkan angka heksadesimal yang valid.');
    }
   } else if (conversionType === 'hexToBinary') {
    if (/^[0-9A-Fa-f]+$/.test(numberValue)) {
       resultInput.value = convertHexToBinary(numberValue);
    } else {
       alert('Masukkan angka heksadesimal yang valid.');
    }
   } else if (conversionType === 'hexToOctal') {
    if (/^[0-9A-Fa-f]+$/.test(numberValue)) {
       resultInput.value = convertHexToOctal(numberValue);
    } else {
       alert('Masukkan angka heksadesimal yang valid.');
    }
   } else {
    alert('Pilih jenis konversi yang valid.');
   }
}

// Bagian Fungsi konversi 

function convertDecimalToBinary(decimal) {
  return Number(decimal).toString(2);
}

function convertDecimalToOctal(decimal) {
  return Number(decimal).toString(8);
}

function convertDecimalToHex(decimal) {
  return Number(decimal).toString(16).toUpperCase();
}

function convertBinaryToDecimal(binary) {
  return parseInt(binary, 2).toString();
}

function convertBinaryToOctal(binary) {
  return parseInt(binary, 2).toString(8);
}

function convertBinaryToHex(binary) {
  return parseInt(binary, 2).toString(16).toUpperCase();
}

function convertOctalToDecimal(octal) {
  return parseInt(octal, 8).toString();
}

function convertOctalToBinary(octal) {
  return parseInt(octal, 8).toString(2);
}

function convertOctalToHex(octal) {
  return parseInt(octal, 8).toString(16).toUpperCase();
}

function convertHexToDecimal(hex) {
  return parseInt(hex, 16).toString();
}

function convertHexToBinary(hex) {
  return parseInt(hex, 16).toString(2);
}

function convertHexToOctal(hex) {
  return parseInt(hex, 16).toString(8);
}