import fs from "fs";
import path from "path";

export default function dir(program, programDescription) {
  program
    .option("-m, --mkdir <dirname>", "Creates a new directory with the specified name.")
    .action((options) => {
      if (options.mkdir) {
        const dirname = options.mkdir;
        const dirPath = path.resolve(process.cwd(), dirname);

        if (fs.existsSync(dirPath)) {
          console.error(`Error: Directory '${dirname}' already exists at ${dirPath}.`);
          process.exit(1);
        }

        try {
          fs.mkdirSync(dirPath, { recursive: true });
          console.log(`Successfully created directory: '${dirname}' at ${dirPath}`);
        } catch (error) {
          console.error(`Failed to create directory '${dirname}': ${error.message}`);
          process.exit(1);
        }
      }
    });
}
