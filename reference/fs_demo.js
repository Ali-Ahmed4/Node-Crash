const fs = require("fs")
const path = require("path")



/* Making a directory *//* 

fs.mkdir(path.join(__dirname,"test"),{}, (err) => {
    if(err) throw err

    console.log("Folder created");
}) */


/* creating  a file */

/* fs.writeFile(path.join(__dirname,"test", "hello.txt"),"Hello mf", (err) => {
    if(err) throw err

    console.log("File created and written to");
})
 */

/* modifying the contents of a file */

/* fs.appendFile(path.join(__dirname,"test", "hello.txt"),"(nope)", (err) => {
    if(err) throw err

    console.log("File contents appended.");
}) */
