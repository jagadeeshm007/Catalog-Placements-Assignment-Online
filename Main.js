const fs = require('fs');
const { computeSecret } = require('./modules/computeSecret');

// Process test case 1
const testCase1 = fs.readFileSync('./testcases/testcase1.json', 'utf-8');
const secret1 = computeSecret(testCase1);
console.log(secret1.toString());

// Process test case 2
const testCase2 = fs.readFileSync('./testcases/testcase2.json', 'utf-8');
const secret2 = computeSecret(testCase2);
console.log(secret2.toString());