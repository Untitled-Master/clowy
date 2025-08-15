export default function desc(program, programDescription) {
  program
    .command("desc")
    .description("Prints the CLI's main description.")
    .action(() => {
      console.log(programDescription);
    });
}
