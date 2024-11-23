//your JS code here. If required.
const processData = (array) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(array);
        }, 3000);
    });
};

const filterOddNumbers = (array) => {
    return array.filter(num => num % 2 === 0);
};

const multiplyEvenNumbers = (array) => {
    return array.map(num => num % 2 === 0 ? num * 2 : num);
};

const updateOutput = (result) => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = result.join(', ');
};

const inputArray = [1, 2, 3, 4];

processData(inputArray)
    .then(filterOddNumbers)
    .then(filteredArray => {
        setTimeout(() => {
            updateOutput(filteredArray);
        }, 1000);
        return multiplyEvenNumbers(filteredArray);
    })
    .then(multipliedArray => {
        setTimeout(() => {
            updateOutput(multipliedArray);
        }, 2000);
    });