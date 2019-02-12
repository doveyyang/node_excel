var excelParser = require('excel-parser');
 
excelParser.parse({
  inFile: './壹伴-图文分析导出-图南鸟科技.xlsx',
  worksheet: 1,
  skipEmpty: true,
//   searchFor: {
//     term: ['my serach term'],
//     type: 'loose'
//   }
},function(err, records){
  if(err) console.error(err);
  console.log(records);
});