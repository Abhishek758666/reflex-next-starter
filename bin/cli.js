#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommnad = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.error(`failed to execute command : ${command} ,${error}`);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckOutCommand = ``;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`clonning repo with name ${repoName}`);

const checkedOut = runCommnad(gitCheckOutCommand);
if (!checkedOut) process.exit(-1);

console.log(`installing dependencies for ${repoName}`);
const installedDeps = runCommnad(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log(`Follow command to start`);
console.log(`cd ${repoName} && npm start`);
