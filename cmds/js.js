import fs from "fs";
import path from "path";
import { execSync } from "child_process";

export default function createJSProject(dirname, initGit) {
    const projectPath = path.resolve(process.cwd(), dirname);
    fs.mkdirSync(projectPath, { recursive: true });
    fs.writeFileSync(path.join(projectPath, "app.js"), 'console.log("Hello, JavaScript!");');

    if (initGit) {
        execSync("git init", { cwd: projectPath, stdio: "inherit" });
    }

    console.log(`✅ JavaScript project "${dirname}" created.`);
    // Open the project in VS Code
    execSync(`code ${dirname}`);
    console.log(`✅ VS Code opened for project "${dirname}".`);
}
