function clearServerResponse() {
  setTimeout(() => {
    document.getElementById('serverResponse').innerHTML = '';
  }, 3000);
}

function createFile() {
  const request = new XMLHttpRequest();
  const fileName = document.getElementById('newFileName').value;
  const json = JSON.stringify({ fileName });
  request.open('POST', '/api/createFile', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener('load', () => {
    const received = JSON.parse(request.response);
    if (request.status === 200) {
      clearServerResponse();
      document.getElementById('serverResponse').innerHTML = `file created: ${received}`;
    }
  });
  request.send(json);
}

function deleteFile() {
  const request = new XMLHttpRequest();
  const fileName = document.getElementById('deleteFileName').value;
  const json = JSON.stringify({ fileName });
  request.open('POST', '/api/deleteFile', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener('load', () => {
    const received = JSON.parse(request.response);
    if (request.status === 200) {
      clearServerResponse();
      document.getElementById('serverResponse').innerHTML = `file deleted: ${received}`;
    }
  });
  request.send(json);
}

function readOnlyFile() {
  const request = new XMLHttpRequest();
  const fileName = document.getElementById('readOnlyFileName').value;
  const json = JSON.stringify({ fileName });
  request.open('POST', '/api/readFile', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener('load', () => {
    const received = JSON.parse(request.response);
    if (request.status === 200) {
      document.getElementById('readOnlyFileContent').innerHTML = '';
      document.getElementById('readOnlyFileContent').innerHTML = received.content;
      clearServerResponse();
      document.getElementById('serverResponse').innerHTML = `file is open for reading: ${received.fileName}`;
    }
  });
  request.send(json);
}

function readFile() {
  const request = new XMLHttpRequest();
  const fileName = document.getElementById('readFileName').value;
  const json = JSON.stringify({ fileName });
  request.open('POST', '/api/readFile', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener('load', () => {
    const received = JSON.parse(request.response);
    if (request.status === 200) {
      document.getElementById('updateFileContent').innerHTML = '';
      document.getElementById('updateFileContent').innerHTML = received.content;
      clearServerResponse();
      document.getElementById('serverResponse').innerHTML = `file is open for reading and updating: ${received.fileName}`;
    }
  });
  request.send(json);
}

function updateFile() {
  const request = new XMLHttpRequest();
  const fileName = document.getElementById('readFileName').value;
  const fileContent = document.getElementById('updateFileContent').value;
  const json = JSON.stringify({ fileName, fileContent });
  request.open('POST', '/api/updateFile', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener('load', () => {
    const received = JSON.parse(request.response);
    if (request.status === 200) {
      clearServerResponse();
      document.getElementById('updateFileContent').innerHTML = '';
      document.getElementById('updateFileContent').innerHTML = received.content;
      document.getElementById('serverResponse').innerHTML = `file updated: ${received.fileName}`;
    }
  });
  request.send(json);
}

function getAllFiles() {
  const request = new XMLHttpRequest();
  request.open('GET', '/api/getAllFiles', true);
  request.addEventListener('load', () => {
    const received = JSON.parse(request.response);
    if (request.status === 200) {
      alert(received);
    }
  });
  request.send();
}
