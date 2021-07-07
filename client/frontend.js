const request = new XMLHttpRequest();

function createFile() {
    const fileName = document.getElementById("newFileName").value;
    const json = JSON.stringify({fileName: fileName});
    request.open('POST', '/api/file', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener("load", () => {
        const resivedText = JSON.parse(request.responseText);
        if (request.status === 200) {
            document.getElementById('content').innerHTML = "";
            document.getElementById('content').innerHTML = "file created: " + resivedText;
        }
    });
    request.send(json);
    // const response = await request('/api/file','POST', nameFile);
    // console.log(response)
    // if (response === "ready") {
    //     document.getElementById('content').innerHTML = "";
    //     document.getElementById('content').innerHTML = "file status " + response;
    // }
};

async function getAllFile() {
    const allFiels = await request('/api/file');
};

function deleteFile() {

};

function readFile() {

};

// async function request(url, method = 'GET', data = null) {
//     try {
//         const headers = {}
//         let body
//
//         if (data) {
//             headers['Content-Type'] = 'application/json'
//             body = JSON.stringify(data)
//         }
//
//         const response = await fetch(url, {
//             method,
//             headers,
//             body
//         })
//         return await response.json()
//     } catch (e) {
//         console.warn('Error:', e.message)
//     }
// }