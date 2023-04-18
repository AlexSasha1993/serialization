function serializeIntArray(arr) {
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num >= 1 && num <= 300) {
            res += String.fromCharCode(num + 64);
        } else {
            console.error(`Number ${num} is out of range`);
            return '';
        }
    }
    return res;
}

function deserializeIntArray(str) {
    const res = [];
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (code >= 65 && code <= 364) {
            res.push(code - 64);
        } else {
            console.error(`Invalid character code ${code}`);
            return [];
        }
    }
    return res;
}

// Тесты
const inputArr = [1, 2, 3, 300, 150, 1, 200];
const expectedStr = 'ABCC`AL';
const expectedRatio = expectedStr.length / (inputArr.length * 2);
const serializedStr = serializeIntArray(inputArr);
const deserializedArr = deserializeIntArray(expectedStr);
const actualRatio = serializedStr.length / (inputArr.length * 2);

console.log(`Input: ${inputArr}`);
console.log(`Expected output: ${expectedStr} (compression rate ${expectedRatio})`);
console.log(`Actual output: ${serializedStr} (compression rate ${actualRatio})`);
console.log(`Deserialized output: ${deserializedArr}`);

