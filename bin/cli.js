#!/usr/bin/env node
import { execa } from "execa";
import path from "path";
import fs from "fs-extra";
import { fileURLToPath } from "url"; // This was missing

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectName = process.argv[2];

if (!projectName) {
  console.error("Please specify the project name:");
  console.log("  npx reflex-next-starter <project-name>");
  process.exit(1);
}

async function main() {
  try {
    // Create Next.js app
    console.log("Creating Next.js app...");
    await execa(
      "npx",
      [
        "create-next-app@latest",
        projectName,
        "--typescript",
        "--no-tailwind",
        "--src-dir",
        "--no-turbo",
        "--eslint",
        "--no-import-alias",
        "-y",
      ],
      { stdio: "inherit" }
    );

    console.log("Next.js app created");

    // Copy templates
    console.log("Generating components...");
    const templatePath = path.join(__dirname, "../templates");
    const projectPath = path.join(process.cwd(), projectName);

    console.log("Copying components files...");
    fs.copySync(templatePath, projectPath, { overwrite: true });

    // Install additional dependencies
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
    console.log("Run the following commands to start: \n");
    console.log(`cd ${projectName}`);
    console.log("npm run dev");
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main();
