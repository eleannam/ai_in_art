const express = require('express')
const app = express()
const fs = require('fs')
const cors = require('cors')
const multer = require('multer')
const fsExtra = require('fs-extra')

//Import PythonShell module.
const { PythonShell } = require('python-shell');
const homeDir = '/home/eimich/ai_in_art/';
const pythonScriptPath = '/home/eimich/react_web_gans_app/scripts/deep-music-visualizer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'input_files/')
  },
  filename: (req, file, cb) => {
    fsExtra.emptyDirSync('input_files/')

    if (file.originalname.includes('.mp3')) {
      cb(null, 'input.mp3')
    } else if (file.originalname.includes('.wav')) {
      cb(null, 'input.wav')
    } else if (file.originalname.includes('.ogg')) {
      cb(null, 'input.ogg')
    }
  },
})

const upload = multer({ storage: storage });

app.use(cors());

app.post('/inputFile', upload.single('file'), function (req, res) {

  console.log('here we are!!');
  console.log(req.body.fileName);

  try {
    fs.unlinkSync('./output.mp4')
    fs.unlinkSync(homeDir + 'public/Videos/output.mp4')
    //file removed
  } catch(err) {
    console.error(err)
  }
  
  var inputFileName = '';
  if (req.body.fileName.includes('.mp3')) {
    inputFileName = homeDir + 'nodejs/input_files/input.mp3'
  } else if (req.body.fileName.includes('.wav')) {
    inputFileName = homeDir + 'nodejs/input_files/input.wav'
  } else if (req.body.fileName.includes('.ogg')) {
    inputFileName = homeDir + 'nodejs/input_files/input.ogg'
  }

  const resolution = '128'
  const duration = '4'

  //Here are the option object in which arguments can be passed for the python_test.js.
  let options = {
    mode: 'text',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: pythonScriptPath, //If you are having python_test.py script in same folder, then it's optional.
    args: ['--song', inputFileName, '--resolution', resolution, '--duration', duration] //An argument which can be accessed in the script using sys.argv[1]
  };


  PythonShell.run('visualize.py', options, function (err, result) {
    if (err) throw err;
    // result is an array consisting of messages collected
    //during execution of script.
    console.log('result: ', result.toString());

    const oldPath = homeDir + 'nodejs/output.mp4'
    const newPath = homeDir + 'public/Videos/output.mp4'
    fs.copyFile(oldPath, newPath, function (err) {
      if (err) throw err
      console.log('Successfully moved')
    })

    const outputFile = [
      { fileName: homeDir + 'nodejs/output.mp4' }
    ];

    const outputFileName = homeDir + 'nodejs/output.mp4'

    res.json({ video: homeDir + 'nodejs/output.mp4', success: 'true' });
  });
});

app.use('/login', (req, res) => {
  res.send({
    token: 'login'
  });
});

app.use('/joinus', (req, res) => {
  res.send({
    token: 'joinus'
  });
});

//Creates the server on default port 8000 and can be accessed through localhost:8000
const port = 8000;
app.listen(port, () => console.log(`Server connected to ${port} and listening at http://localhost:${port}`));