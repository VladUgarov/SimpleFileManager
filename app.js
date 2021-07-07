const express = require('express')
const path = require('path')
const app = express()
const fs = require("fs");
const jsonParser = express.json();

app.use(express.json());

async function createFile(fileName) {
    fileName += '.txt';
    return new Promise((resolve, reject) => {
        fs.writeFile('files' + fileName, "", function (error) {
            if (error) {
                reject(new Error("Create file Error"));
            } else {
                resolve(fileName);
                console.log("File created " + fileName);
            }
        });
    });
}

// let data = fs.readFileSync(path.resolve('files','files.txt'), "utf8");
// fs.readdirSync(filesFolder).forEach(file => {
//     console.log(file);
// })


// app.get('/api/file' ,(req,res) =>{
//     res.status(200).json(arrFileName);
// })
app.post('/api/file' , jsonParser, async (req, res) => {
    const fileName = req.body.fileName;
    try {
        res.json(await createFile(fileName));
    } catch (error) {
        res.json(error);
    }
})


app.use(express.static(path.resolve(__dirname,'client')))
app.get('*',((req, res) => {
    res.sendFile(path.resolve(__dirname,'client','index.html'))
}))
app.listen(3000, ()=> console.log("Server has been started on port 3000..."))