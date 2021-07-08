import path from 'path'
import fs from 'fs'

export async function createFile(fileName) {
    fileName += '.txt';
    return new Promise((resolve, reject) => {
        fs.writeFile(path.resolve('files', fileName), "", function (error) {
            if (error) {
                reject(new Error("Create file Error"));
            } else {
                resolve(fileName);
                console.log("File created " + fileName);
            }
        });
    });
}

export async function deleteFile(fileName) {
    fileName += '.txt';
    return new Promise((resolve, reject) => {
        fs.unlink(path.resolve('files', fileName), function (error) {
            if (error) {
                reject(new Error("Delete file Error"));
            } else {
                resolve(fileName);
                console.log("File deleted " + fileName);
            }
        });
    });
}

export async function readFile(fileName) {
    fileName += '.txt';
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve('files', fileName), 'utf-8', function (error,data) {
            if (error) {
                reject(new Error("Read file Error"));
            } else {
                const res = {
                    fileName: fileName,
                    content: data
                }
                resolve(res);
                console.log("File read " + fileName);
            }
        });
    });
}

export async function updateFile(fileName, fileContent) {
    fileName += '.txt';
    return new Promise((resolve, reject) => {
        fs.writeFile(path.resolve('files', fileName), fileContent, function (error) {
            if (error) {
                reject(new Error("Update file Error"));
            } else {
                resolve(fileName);
                console.log("File updated " + fileName);
            }
        });
    });
}

export async function getAllFiles() {
    return new Promise((resolve, reject) => {
        fs.readdir(path.resolve('files'), function (error,files) {
            if (error) {
                reject(new Error("Getting the list of files ended with an error"));
            } else {
                const arrFiles =[]
                files.forEach(file => {
                    arrFiles.push(file)
                })
                resolve(arrFiles);
                console.log("file list received");
            }
        });
    });
}