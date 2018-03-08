const express = require('express')
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const request = require('request');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/restaurants/:id', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/api/restaurants/:id/gallery', function (req, res) {
  res.redirect(`http://127.0.0.1:3001/api/restaurants/${req.params.id}/gallery`)
});
app.get('/api/restaurants/:id/overview', function (req, res) {
  res.redirect(`http://127.0.0.1:3002/api/restaurants/${req.params.id}/overview`)
});
app.get('/api/restaurants/:id/sidebar', function (req, res) {
  res.redirect(`http://127.0.0.1:3003/api/restaurants/${req.params.id}/sidebar`)
});

app.get('/api/restaurants/:id/recommendations', function (req, res) {
  // request(`http://127.0.0.1:3004/api/restaurants/${req.params.id}/recommendations`).pipe(res)
  res.redirect(`http://127.0.0.1:3004/api/restaurants/${req.params.id}/recommendations`)
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});
