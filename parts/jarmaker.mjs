import { createRequire } from "module"; // used to allow to use require("module")

export function jarmaker(){

  console.log("Creating jar file");

    const require = createRequire(import.meta.url);
    // can now use `require` in an ESM
    const { exec } = require("child_process");
  
    exec(
      `jar cf "ExtraBounties-universal.jar" data pack.mcmeta pack.png META-INF fabric.mod.json assets`,
      (error, stdout, stderr) => {
        if (error) {
          console.error("error: " + error.message);
          return;
        }
        if (stderr) {
          console.error("stderr: " + stderr);
          return;
        }
        console.log("File jar created successfully");
      }
    );
};