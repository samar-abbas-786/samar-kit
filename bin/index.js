#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");

const targetDir = process.argv[2];

if (!targetDir) {
  console.log("❗ Please provide a project name: create-mern-stack-app my-app");
  process.exit(1);
}

const root = path.resolve(process.cwd(), targetDir);
const template = path.join(__dirname, "../template");

console.log("🚀 Creating MERN stack app in", root);
fs.copySync(template, root);

console.log("📦 Installing dependencies...");
execSync("npm install", { cwd: path.join(root, "client"), stdio: "inherit" });
execSync("npm install", { cwd: path.join(root, "server"), stdio: "inherit" });

console.log("✅ Project ready!");
console.log(`
👉 To start the project:

🔹 Server:
cd ${targetDir}/server
npm start

🔹 Client:
cd ${targetDir}/client
npm run dev
`);
