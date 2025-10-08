const greet = (name) => `Hello, ${name || 'World from VGI'}!`;
const name = process.argv[2];
console.log(greet(name));
