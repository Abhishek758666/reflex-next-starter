#!/usr/bin/env node
import { execa } from "execa";
import path from "path";
import fs from "fs-extra";

// const execa = require("execa");
// const path = require("path");
// const fs = require("fs-extra");

const projectName = process.argv[2];

if (!projectName) {
  console.error("Please specify the project name:");
  console.log("  npx create-reflex-starter <project-name>");
  process.exit(1);
}

async function main() {
  try {
    // Create Next.js app
    console.log("Creating Next.js app...");
    await execa("npx", [
      "create-next-app@latest",
      projectName,
      "--typescript",
      "--no-tailwind",
      "--src-dir",
      "-y",
    ]);

    // Copy templates
    const templatePath = path.join(__dirname, "../templates");
    const projectPath = path.join(process.cwd(), projectName);

    console.log("Copying template files...");
    fs.copySync(templatePath, projectPath, { overwrite: true });

    // Install additional dependencies (example: Redux)
    console.log("Installing additional dependencies...");
    await execa(
      "npm",
      [
        "install",
        "redux",
        "react-redux",
        "@reduxjs/toolkit",
        "axios",
        "jodit-react",
        "react-toastify",
        "redux-persist",
        "zod",
      ],
      {
        cwd: projectPath,
        stdio: "inherit",
      }
    );

    console.log("\nSuccess! Created project at", projectPath);
    console.log("Run the following commands to start:\n");
    console.log(`  cd ${projectName}`);
    console.log("  npm run dev");
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main();
