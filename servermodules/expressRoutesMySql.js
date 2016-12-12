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
console.log('Doing lineArea query');
//A query for lineArea
connection.query('SELECT * FROM charts.lineArea;',
      function(err, rows, fields) {
        if (!err)
          console.log('The solution is: ', rows);
       else
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
console.log('Doing columnBar query');
//A query for columnBar
connection.query('SELECT * from columnBar',
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
console.log('Doing scatterBubble query');
//A query for lineArea
connection.query('SELECT B.population as Population, B.count as BusinessLisences, Crime.crime as Crime, B.year as Year, B.county as County FROM(SELECT C.year as `year`, C.county as `county`, sum(C.count) as crime FROM charts.crime_monthly as C GROUP BY C.year, C.county) Crime INNER JOIN (SELECT * FROM charts.business) B ON B.county = Crime.county and B.`year` = Crime.`year`;',
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
console.log('Doing Geographical query');
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
