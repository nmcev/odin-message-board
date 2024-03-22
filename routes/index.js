var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Hey Man",
    user: "Muha",
    added: new Date(),

  }
];
let title = "Mini message board"
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: title, messages: messages })
});

router.get('/new', function (req, res) {
  res.render('form', {title: title })
})


router.post('/new', function (req, res, next) {

  messages.push({ text: req.body.message, user: req.body.user || "unknown", added: new Date() })
  res.redirect('/')
  
})
module.exports = router;
