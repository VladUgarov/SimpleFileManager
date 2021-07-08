const request = new XMLHttpRequest();

function createFile() {
    const fileName = document.getElementById("newFileName").value;
    const json = JSON.stringify({fileName: fileName});
    request.open('POST', '/api/createFile', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener("load", () => {
        const received = JSON.parse(request.response);
        if (request.status === 200) {
            clearServerResponse()
            document.getElementById('serverResponse').innerHTML = "file created: " + received;
        }
    });
    request.send(json);
};

function deleteFile() {
    const fileName = document.getElementById("deleteFileName").value;
    const json = JSON.stringify({fileName: fileName});
    request.open('DELETE', '/api/deleteFile', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener("load", () => {
        const received = JSON.parse(request.response);
        if (request.status === 200) {
            clearServerResponse()
            document.getElementById('serverResponse').innerHTML = "file deleted: " + received;
        }
    });
    request.send(json);
};

function readOnlyFile() {
    const fileName = document.getElementById("readOnlyFileName").value
    const json = JSON.stringify({fileName: fileName});
    request.open('POST', '/api/readFile', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener("load", () => {
        const received = JSON.parse(request.response);
        if (request.status === 200) {
            document.getElementById('readOnlyFileContent').innerHTML = "";
            document.getElementById('readOnlyFileContent').innerHTML = received.content;
            clearServerResponse()
            document.getElementById('serverResponse').innerHTML = "file is open for reading: " + received.fileName;
        }
    });
    request.send(json);
};

function readFile() {
    const fileName = document.getElementById("readFileName").value;
    const json = JSON.stringify({fileName: fileName});
    request.open('POST', '/api/readFile', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener("load", () => {
        const received = JSON.parse(request.response);
        if (request.status === 200) {
            document.getElementById('updateFileContent').innerHTML = "";
            document.getElementById('updateFileContent').innerHTML = received.content;
            clearServerResponse()
            document.getElementById('serverResponse').innerHTML = "file is open for reading and updating: " + received.fileName;
        }
    });
    request.send(json);
};

function updateFile() {
    const fileName = document.getElementById("readFileName").value;
    const fileContent = document.getElementById("updateFileContent").value;
    const json = JSON.stringify({fileName: fileName, fileContent: fileContent });
    request.open('PUT', '/api/updateFile', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener("load", () => {
        const received = JSON.parse(request.response);
        if (request.status === 200) {
            clearServerResponse()
            document.getElementById('serverResponse').innerHTML = "file updated: " + received;
        }
    });
    request.send(json);
};

function getAllFiles() {
    request.open('GET', '/api/getAllFiles', true);
    request.addEventListener("load", () => {
        const received = JSON.parse(request.response);
        if (request.status === 200) {
            alert(received)
        }
    });
    request.send();
};

function clearServerResponse(){
    setTimeout(()=>{
        document.getElementById('serverResponse').innerHTML = "";
    },3000)
}
