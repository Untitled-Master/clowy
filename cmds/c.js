import fs from "fs";
import path from "path";
import { execSync } from "child_process";

export default function createCProject(dirname, initGit) {
    const projectPath = path.resolve(process.cwd(), dirname);
    fs.mkdirSync(projectPath, { recursive: true });
    fs.writeFileSync(path.join(projectPath, "main.c"), '#include <stdio.h>\n\nint main() {\n    printf("Hello, C!\\n");\n    return 0;\n}\n');

    if (initGit) {
        execSync("git init", { cwd: projectPath, stdio: "inherit" });
    }

    console.log(`✅ C project "${dirname}" created.`);
    // Open the project in VS Code
    execSync(`code ${dirname}`);
    console.log(`✅ VS Code opened for project "${dirname}".`);
}
