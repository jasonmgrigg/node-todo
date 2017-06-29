const express = require('express');
const path = require('path');
// const list = require('./data.js');
// const clist = require('./completedList.js');
const mustacheExpress = require('mustache-express');
var bodyParser = require('body-parser');
const app = express();
const models = require('./models')

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.get('/todo/', function (req, res) {

  res.render('todo')
});


app.post('/', function(req, res){
  const item = models.NewTodoList.build({
  item: req.body.item,
  status: req.body.status
})
item.save().then(() => {});
  const status = models.NewTodoList.build({
})
    res.redirect('/todo');
  });




app.listen(3000, function(){
  console.log('Started express application!')
});
