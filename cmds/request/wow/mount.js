#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({apikey: process.env.BATTLENET_CLIENT_ID});

const request = yargs
  .command({
    command: 'mount',
    describe: 'Fetch a World of Warcraft Mount',
    builder: (yargs) => {
      return yargs
        .options({
          origin: {
            alias: 'o',
            describe: 'The API endpoint to make the request to',
            choices: ['us', 'eu'],
            default: 'us',
          }
        })
    },
    handler: (argv) => {
      const {origin} = argv;
      return blizzard.wow.mount({origin})
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    }
  }).argv;

module.exports = request;