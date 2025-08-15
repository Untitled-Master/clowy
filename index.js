#!/usr/bin/env node

import { program } from "commander";
import dir from "./cmds/dir.js";

// Set up the program description and version
const programDescription = "The best CLI tool to start a new project.";
program.version("1.0.0").description(programDescription);

// Load commands
dir(program, programDescription);

program
  .command("desc")
  .description("Prints the CLI's main description.")
  .action(() => {
    console.log(programDescription);
  });

program.parse(process.argv);
