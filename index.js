const express = require('express');
const multer = require('multer');
const app = express();
const port = 1122;

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads'); //where we needs to upload our file (uploads) & we create folder by itself
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    },
  }),
});

//upload.single('user_file')
app.post('/upload', upload.single('user_file'), (req, res, next) => {
  try {
    res.send('file uploaded successfully');
  } catch (error) {
    res.send(error);
  }
});

app.get('/', (req, res) => {
  res.send('get request ');
});

app.listen(port, () => {
  console.log(`server is start at  http://localhost:${port}`);
});
