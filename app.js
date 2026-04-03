const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"]
    }
  })
);

// "База данных"
const comments = [];

app.get('/', (req, res) => {
  res.render('index', { comments });
});

app.post('/comment', (req, res) => {
  comments.push(req.body.text);
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});