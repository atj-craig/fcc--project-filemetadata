import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'
import multer from 'multer'
const app = express()
const upload = multer({ dest: "./uploads/" })

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  console.log(req.file)
  console.log(req.body)
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  })
})

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});