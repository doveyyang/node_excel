if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('./resut.xls');

console.log(workbook)