let express = require('express');
let cors = require('cors');
require('dotenv').config()
const multer  = require('multer')
let upload=multer({dest:"uploads/"});
let fs = require('fs')
let app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (request, response) => {
  let name = request.file.originalname
  let type = request.file.mimetype
  let size = request.file.size
  response.json({name: name, type: type, size: size})
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
