var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    name: "John",
    last: "Smith"
  });
});

var Sequelize = require('Sequelize');

 var sequelize = new Sequelize('mysql://u519997597_admin:arshavin021@mysql.hostinger.in:3306/u519997597_ks');

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });





router.get('/create_t1', (request: Request, response: Response) => {
    var User = sequelize.import(__dirname + "/models/tas_users")
  
  User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    USERNAME: 'John',
    PASSWORD: 'Hancock'
  });
});

});

module.exports = router;
