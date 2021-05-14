#!/usr/bin/env node
import meow from 'meow';
import generate from  './generate.js'

const cli = meow(`
    Usage
        $ ez-dotenv <filelocation> --read=ENV_VAR

    Options
        --filename, -f       Path to your .env file.
        --read, -r             Read the given variable from your .env file, if any. Empty string if none.
        --readAll, -t         Reads all the variables in your .env file.
        --add, -a              Adds a variable to the end of your .env file
        --remove, -d        Removes the given variable from your .env file

    Examples
        $ ez-dotenv -r FOO
        $ ez-dotenv -t
        $ ez-dotenv -a FOO bar
        $ ez-dotenv -d FOO
`, {
    flags: {
        read: {
            type: 'string',
            alias: 'r',
        },
        readAll: {
            type: 'boolean',
            alias: 't',
            default: false
        },
        add: {
            type: 'string',
            alias: 'a',
        },
        remove: {
            type: 'string',
            alias: 'd',
        },
        filename: {
            type: 'string',
            alias: 'f',
            default: './.env'
        }
    },
    importMeta: import.meta,
})

generate(cli.input, cli.flags)