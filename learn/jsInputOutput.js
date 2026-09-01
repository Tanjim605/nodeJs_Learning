import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (name) => {
   rl.question("Email: ", (email) => {
    console.log("Name:", name);
    console.log("Email:", email);

    rl.close();
  });
});

// eikhane question er vetorer " " console e show kore, tarpor er callback function er moddhe input ney.
// nice
