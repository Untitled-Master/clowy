import fs from "fs";
import path from "path";
import { execSync } from "child_process";

export default function createPythonProject(dirname, initGit) {
    const projectPath = path.resolve(process.cwd(), dirname);
    fs.mkdirSync(projectPath, { recursive: true });
    fs.writeFileSync(path.join(projectPath, "main.py"), 'print("Hello, Python!")');

    if (initGit) {
        execSync("git init", { cwd: projectPath, stdio: "inherit" });
    }

    console.log(`✅ Python project "${dirname}" created.`);
    // Open the project in VS Code
    execSync(`code ${dirname}`);
    console.log(`✅ VS Code opened for project "${dirname}".`);
}
