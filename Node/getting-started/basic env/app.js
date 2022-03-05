#!/usr/bin/env node
//shebang line

require('dotenv').config();
//installed with yarn add dotenv, gets .env

process.env.USER_ID; // "239482"
process.env.USER_KEY; // "foobar"
process.env.NODE_ENV; // "development"
