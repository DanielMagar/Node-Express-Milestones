const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).command('greet', 'Greet a user', {
    name: {
        describe: 'Name to greet',
        type: 'string',
        demandOption: true // This makes the name argument required
    },
}, (argv) => {
    console.log(`Hello, ${argv?.name}, welcome !`);
    
}).command('farewell', 'Bid farewell to a user', {
    name: {
        describe: 'Name to bid farewell',
        type: 'string',
        demandOption: true // This makes the name argument required         
    },
}, (argv) => {
    console.log(`Goodbye, ${argv?.name} !`);
    
}).help().argv;
