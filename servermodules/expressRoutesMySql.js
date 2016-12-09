console.log('entered expressRoutesMysql.js');
//var mysql = require('mysql');
// Connection is defined as a global variable
var mysql = require('mysql');
var connection = mysql.createConnection
({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'charts'
});
console.log('test database connection');
connection.connect();
connection.query('SELECT * from collegesbystate',
      function(err, rows, fields) {
        if (!err)
          console.log('Sucessful connection!');
       else
          console.log('Error while performing Query.', err);
});
connection.end();

module.exports = function(app) {
 //HighCharts api calls to database
app.get('/api/lineArea', function(req,res) {
  var connection = mysql.createConnection
({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'charts'
});
 connection.connect();
console.log('coming here to get high chart column');
//A query for lineArea
connection.query('SELECT * from collegesbystate',
      function(err, rows, fields) {
        if (err)
          //console.log('The solution is: ', rows);
       //else
          console.log('Error while performing Query.', err);
       res.send(rows);

});
connection.end();
});

app.get('/api/columnBar', function(req,res) {
  var connection = mysql.createConnection
({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'charts'
});
 connection.connect();
console.log('coming here to get high chart column');
//A query for lineArea
connection.query('SELECT * from collegesbystate',
      function(err, rows, fields) {
        if (err)
          //console.log('The solution is: ', rows);
       //else
          console.log('Error while performing Query.', err);
       res.send(rows);

});
connection.end();
});

app.get('/api/scatterBubble', function(req,res) {
  var connection = mysql.createConnection
({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'charts'
});
 connection.connect();
console.log('coming here to get high chart column');
//A query for lineArea
connection.query('SELECT * from collegesbystate',
      function(err, rows, fields) {
        if (err)
          //console.log('The solution is: ', rows);
       //else
          console.log('Error while performing Query.', err);
       res.send(rows);

});
connection.end();
});

app.get('/api/Geographical', function(req,res) {
  var connection = mysql.createConnection
({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'charts'
});
 connection.connect();
console.log('coming here to get high chart column');
//A query for lineArea
connection.query('SELECT * from collegesbystate',
      function(err, rows, fields) {
        if (err)
          //console.log('The solution is: ', rows);
       //else
          console.log('Error while performing Query.', err);
       res.send(rows);

});
connection.end();
});


	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); 
    // load the single view file 
    // (angular will handle the page changes on the front-end)
	});
}
