// cmds/rvst.js
import { execSync } from "child_process";
import degit from "degit";
import prompts from "prompts";
import chalk from "chalk";

export default async function createRVSTProject() {
  const response = await prompts({
    type: "text",
    name: "projectName",
    message: "Enter your project name:",
    initial: "my-rvst-app"
  });

  const projectName = response.projectName;
  const repo = "Untitled-Master/RVST-Stack";

  console.log(chalk.green(`\n🚀 Creating a new RVST-Stack project: ${projectName}\n`));

  try {
    const emitter = degit(repo, { cache: false, force: true });
    await emitter.clone(projectName);

    console.log(chalk.blue("\n📦 Installing dependencies...\n"));
    execSync(`cd ${projectName} && npm install`, { stdio: "inherit" });

    console.log(chalk.green(`\n✅ Project setup complete!`));
    console.log(`\n👉 Next steps:\n`);
    console.log(chalk.cyan(`cd ${projectName}`));
    console.log(chalk.cyan(`npm run dev`));
  } catch (error) {
    console.error(chalk.red("\n❌ Error creating the project:"), error);
  }
}
