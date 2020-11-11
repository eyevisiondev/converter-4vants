
const fs = require('fs');
const { exec } = require("child_process");

converter = (filename) =>{

    fs.mkdir(path.join('/var/www/html/potree-senai/pointclouds/', `${filename}`), (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Directory created successfully!');
    });

    exec(`./src/build/PotreeConverter ./src/uploads/ -o /var/www/html/potree-senai/pointclouds/${filename} --material ELEVATION`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}

module.exports = converter;