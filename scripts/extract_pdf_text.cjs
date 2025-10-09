const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('./Rahul Narsapur.pdf');

pdf(dataBuffer).then(function(data) {
  console.log('=== PDF TEXT START ===');
  console.log(data.text);
  console.log('=== PDF TEXT END ===');
}).catch(err => {
  console.error(err);
  process.exit(1);
});
