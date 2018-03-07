const express = require('express')
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const request = require('request');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/restaurants/:id', function (req, res) {
  // console.log('goooo')
  // console.log(req.params.id)
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/api/restaurants/:id', function (req, res) {
  request(`http://127.0.0.1:3004/restaurants/${req.params.id}`).pipe(res)
  // res.redirect(`http://127.0.0.1:3003/api/restaurants/${req.params.id}`)
});

app.get('/api/restaurants/recommended/:id', function (req, res) {
  request(`http://127.0.0.1:3004/api/restaurants/recommended/${req.params.id}`).pipe(res)
  // res.redirect(`http://127.0.0.1:3003/api/restaurants/recommended/${req.params.id}`)
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});
