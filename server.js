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

app.get('/api/restaurants/:id/overview', function (req, res) {
  res.redirect(`http://127.0.0.1:3002/api/restaurants/${req.params.id}/overview`)
});

app.get('/api/restaurants/:id/recommendations', function (req, res) {
  // request(`http://127.0.0.1:3004/api/restaurants/${req.params.id}/recommendations`).pipe(res)
  res.redirect(`http://127.0.0.1:3004/api/restaurants/${req.params.id}/recommendations`)
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});
