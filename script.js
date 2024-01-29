window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
function createPromise(min, max) {
    const randomTime = Math.floor(Math.random() * (max - min + 1)) + min;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resolved after ${randomTime} seconds`);
        }, randomTime * 1000);
    });
}

// Array of five promises with random resolve times between 1 and 5 seconds
const promises = [
    createPromise(1, 5),
    createPromise(1, 5),
    createPromise(1, 5),
    createPromise(1, 5),
    createPromise(1, 5)
];

// Using Promise.any to wait for the first resolved promise and printing its result to the output div
Promise.any(promises)
    .then((result) => {
        const outputDiv = document.getElementById('output');
        outputDiv.innerText = result;
    })
    .catch((error) => {
        console.error(error);
    });