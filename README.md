# ez-dotenv
[![NPM downloads](https://img.shields.io/npm/dm/ez-dotenv.svg?style=flat)](https://npmjs.org/package/ez-dotenv)
npm module that **allows easy reading and writing** of  **environment variables** of a .env file!!

## Features

* Prints a specific variable from within a .env file to the terminal, if it exists.
* Prints all of the variables from with a .env file to the terminal!
* Removes a variable from inside of a .env file!
* Adds a variable to the end of a .env file!

## Installation

Install globally for use in any project that uses a .env!!

```bash
npm install -g ez-dotenv
```

## Usage

```bash
  Usage
    $ ez-dotenv <filelocation> --read=ENV_VAR

  Options
    --filename, -f       Path to your .env file. default "./.env"
    --read, -r             Read the given variable from your .env file, if any. Empty string if none.
    --readAll, -t         Reads all the variables in your .env file.  default "false"
    --add, -a              Adds a variable to the end of your .env file
    --remove, -d        Removes the given variable from your .env file

  Examples
    $ ez-dotenv -f ./.env
    $ ez-dotenv -r FOO
    $ ez-dotenv -t
    $ ez-dotenv -a FOO bar
    $ ez-dotenv -d FOO
```