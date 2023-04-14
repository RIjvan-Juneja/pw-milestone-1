// Self-invoking arrow function to generate random number between 1 and 100
(() => {
    // Generate random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    // Log the random number
    console.log(`Random number: ${randomNumber}`);
  })();
  