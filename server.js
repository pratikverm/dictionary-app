const express = require('express')
const axios = require("axios")
const path=require("path")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // console.log(path.join(__dirname,'public'))
//    return res.sendFile('./public/index.html', {root : __dirname});
res.sendFile(__dirname + '/index.html');
})

    app.get('/searchword', (req, res) => {
//   res.send('Hello World!-pratik')
console.log(req.query)
///////////
var options = {
  method: 'GET',
  url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
  params: {entry: req.query.entry},
  headers: {
    'X-RapidAPI-Key': '0382f21d16mshea2ac6bf8cb9c3ep1b867bjsn6b49a3f00e1d',
    'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  res.json(response.data)
}).catch(function (error) {
  console.error(error);
});
///////////// 

// let response={}
// response.data={
//     entry: 'ridiculous',
//     request: 'ridiculous',
//     response: 'ridiculous',
//     assoc_word: [ 'funny', 'stupid', 'silly' ],
//     assoc_word_ex: [ 'funny', 'stupid', 'silly', 'absurd', 'comical' ],
//     version: '7.5.5',
//     author: 'twinword inc.',
//     email: 'help@twinword.com',
//     result_code: '200',
//     result_msg: 'Success'
//   }
//   console.log(response.data);
//   res.json(response.data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:3000`)
}) 