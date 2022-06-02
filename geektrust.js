const fs = require("fs")
const driver = require('./controller/driver');


const filename = process.argv[2]


fs.readFile(filename, "utf8", (err, data) => {
    if (err) throw err
    var inputLines =  data.toString().split(/\r\n/);
    // Add your code here to process input commands
    driver.calc(inputLines);
});
