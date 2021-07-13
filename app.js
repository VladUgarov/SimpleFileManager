import express from 'express';
import path from 'path';
import {
  createFile, deleteFile, readFile, updateFile, getAllFiles,
} from './functions.js';

const __dirname = path.resolve();
const app = express();
const jsonParser = express.json();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'client')));
app.get('/', ((req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
}));
app.listen(3000, () => console.log('Server has been started on port 3000...'));

app.post('/api/createFile', jsonParser, async (req, res) => {
  const fileName = req.body.fileName;
  try {
    res.json(await createFile(fileName));
  } catch (error) {
    res.json(error);
  }
});

app.post('/api/readFile', jsonParser, async (req, res) => {
  const fileName = req.body.fileName;
  try {
    res.json(await readFile(fileName));
  } catch (error) {
    res.json(error);
  }
});

app.delete('/api/deleteFile', jsonParser, async (req, res) => {
  const fileName = req.body.fileName;
  try {
    res.json(await deleteFile(fileName));
  } catch (error) {
    res.json(error);
  }
});

app.put('/api/updateFile', jsonParser, async (req, res) => {
  const fileName = req.body.fileName;
  const fileContent = req.body.fileContent;
  try {
    res.json(await updateFile(fileName, fileContent));
  } catch (error) {
    res.json(error);
  }
});

app.get('/api/getAllFiles', jsonParser, async (req, res) => {
  try {
    res.json(await getAllFiles());
  } catch (error) {
    res.json(error);
  }
});
