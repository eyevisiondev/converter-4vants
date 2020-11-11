const express = require('express')
const upload = require('express-fileupload')
const converter = require('./services/converter')
const generateweb = require('./services/generateweb')

const app = express()

app.use(upload())


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    if (req.files) {
        console.log(req.files)
        var file = req.files.file
        var filename = file.name
        var firstname = filename.split(".")
        console.log(filename)
        console.log("Meu split: " + firstname[0])

        file.mv('./src/uploads/' + filename, function (err) {
            if (err) {
                res.send(res)
            } else {
                res.send("File Uploaded")

                
                converter(filename)
                generateweb(filename)
                
                // const { exec } = require("child_process");
                // exec("./src/build/PotreeConverter /home/victor/Documentos/EYEVISION/converter/test01 -o /opt/lampp/htdocs/potree/pointclouds/myconverter --material ELEVATION", (error, stdout, stderr) => {
                //     if (error) {
                //         console.log(`error: ${error.message}`);
                //         return;
                //     }
                //     if (stderr) {
                //         console.log(`stderr: ${stderr}`);
                //         return;
                //     }
                //     console.log(`stdout: ${stdout}`);
                // });
            }

            //my generate html test
            // console.log("Creating HTML exemple")
            // const fs = require('fs');
            // const path = require('path');
            // var teste = "Olá eu vou ser algo mais dinamico"

            // var htmlContent = `<html>${teste}</html>`;

            // //test to mkdir in potree
            // fs.mkdir(path.join('./src/uploads/', 'test'), (err) => { 
            //     if (err) { 
            //         return console.error(err); 
            //     } 
            //     console.log('Directory created successfully!'); 
            // }); 

            // fs.writeFile('./my-page.html', htmlContent, (error) => { /* handle error */ });
        })
    }
})

app.listen(5000)