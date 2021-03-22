#!/usr/bin/env node

const clearConsole = require('clear-any-console');
const pkgJSON = require('./package.json');

clearConsole()

console.log(`
    NAME: ${pkgJSON.name}
    VERSION: ${pkgJSON.version}
    DESCRIPTION: ${pkgJSON.description}
`)

console.log(`
    Shajia Abidi

    I'm a front end web developer, and I've been creating interactive data-driven websites 
    professionally for over four years now. I also enjoy writing, and I have been published 
    in various publications like Smashing Magazine, Kite, Twilio, LogRocket, 
    The Counter, The Tempest, Pew Research Center among others. 

    Twitter: https://twitter.com/abidishajia/
    Github: https://github.com/abidishajia
    LinkedIn: http://linkedin.com/in/abidishajia

`);
