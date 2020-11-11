
const { exec } = require("child_process");

converter = () =>{
    exec("./src/build/PotreeConverter /home/victor/Documentos/EYEVISION/converter/test01 -o /opt/lampp/htdocs/potree/pointclouds/myconverter --material ELEVATION", (error, stdout, stderr) => {
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