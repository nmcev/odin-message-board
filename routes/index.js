var express = require('express');
var router = express.Router();
const indexControllers = require('../controller/indexController')

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
router.get('/', (req, res) => {
  indexControllers.index(req, res, title, messages)
});

router.get('/new', (req, res) => {
  indexControllers.getNewMsg(req, res, title)
})


router.post('/new', (req, res) => {
  indexControllers.postNewMsg(req, res, messages)
})
module.exports = router;
