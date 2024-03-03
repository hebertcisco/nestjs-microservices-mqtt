/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('node:path');
const { execSync } = require('node:child_process');
const dotenv = require('dotenv');

dotenv.config();

const directoryToWork = `${join(__dirname, '..')}`;

execSync(`cp ${directoryToWork}/.env.example ${directoryToWork}/.env`);

execSync(
    `docker run -d --rm --name emqx -p 18083:18083 -p 1883:1883 emqx:latest`,
);
