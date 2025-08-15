#!/usr/bin/env node

import { program } from "commander";
import desc from "./cmds/desc/desc.js";
import createPythonProject from "./cmds/py.js";
import createJSProject from "./cmds/js.js";
import createCProject from "./cmds/c.js";
import rvst from "./cmds/rvst.js";

const programDescription = `
⠄⠄⠄⠄⢠⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣯⢻⣿⣿⣿⣿⣆⠄⠄⠄
⠄⠄⣼⢀⣿⣿⣿⣿⣏⡏⠄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢻⣿⣿⣿⣿⡆⠄⠄
⠄⠄⡟⣼⣿⣿⣿⣿⣿⠄⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⣿⣇⢻⣿⣿⣿⣿⠄⠄
⠄⢰⠃⣿⣿⠿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠙⠿⣿⣿⣿⣿⣿⠄⢿⣿⣿⣿⡄⠄
⠄⢸⢠⣿⣿⣧⡙⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠈⠛⢿⣿⣿⡇⠸⣿⡿⣸⡇⠄
⠄⠈⡆⣿⣿⣿⣿⣦⡙⠳⠄⠄⠄⠄⠄⠄⢀⣠⣤⣀⣈⠙⠃⠄⠿⢇⣿⡇⠄
⠄⠄⡇⢿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⣠⣶⣿⣿⣿⣿⣿⣿⣷⣆⡀⣼⣿⡇⠄
⠄⠄⢹⡘⣿⣿⣿⢿⣷⡀⠄⢀⣴⣾⣟⠉⠉⠉⠉⣽⣿⣿⣿⣿⠇⢹⣿⠃⠄
⠄⠄⠄⢷⡘⢿⣿⣎⢻⣷⠰⣿⣿⣿⣿⣦⣀⣀⣴⣿⣿⣿⠟⢫⡾⢸⡟⠄.
⠄⠄⠄⠄⠻⣦⡙⠿⣧⠙⢷⠙⠻⠿⢿⡿⠿⠿⠛⠋⠉⠄⠂⠘⠁⠞⠄⠄⠄
⠄⠄⠄⠄⠄⠈⠙⠑⣠⣤⣴⡖⠄⠿⣋⣉⣉⡁⠄⢾⣦⠄⠄⠄⠄⠄⠄⠄⠄

The CLI tool to start smth
     - made by a cool guy
`;

program.version("1.0.0").description(programDescription);

// Global option
program.option("-g, --git", "Initialize a git repository in the created project folder.");

// project options
program.option("-p, --pyproj <dirname>", "Creates a new Python project folder with main.py and opens it in VS Code.");
program.option("-j, --jsproj <dirname>", "Creates a new JavaScript project folder with app.js and opens it in VS Code.");
program.option("-c, --cproj <dirname>", "Creates a new C project folder with main.c and opens it in VS Code.");
program.option("-r, --rvst", "Create a new RVST-Stack project from the template repo.");

// Action for all options
program.action(async (options) => {
  if (options.pyproj) {
      createPythonProject(options.pyproj, options.git);
  }
  if (options.jsproj) {
      createJSProject(options.jsproj, options.git);
  }
  if (options.cproj) {
      createCProject(options.cproj, options.git);
  }
  if (options.rvst) {
      await rvst();
  }
});


// Extra commands
desc(program, programDescription);

program.parse(process.argv);
