const promises = Array.from({ length: 5 }, () =>
  new Promise((resolve) => {
    const randomTime = Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
    setTimeout(() => resolve(`Resolved in ${randomTime / 1000} seconds`), randomTime);
  })
);

Promise.any(promises)
  .then((result) => {
    document.getElementById("output").textContent = result;
  })
  .catch((error) => {
    console.error("All promises failed:", error);
  });