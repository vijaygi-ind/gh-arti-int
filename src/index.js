const greet = (name) => `Hello, ${name || 'World'}!`;
const name = process.argv[2];
console.log(greet(name));
