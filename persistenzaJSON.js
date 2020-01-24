var MysqlJson = require('mysql-json');
var mysqlJson = new MysqlJson({
    host     : 'localhost',
    user     : 'root',
    password : 'mysqladmin',
    database : 'databaseProva'
});

// Used to return a mysql connection
mysqlJson.connect(callback);

// Used to launch a query to mysql server
mysqlJson.query(mysqlQuery, callback);

// Used to find a row by primary key
mysqlJson.findByPrimaryKey(tableName, id, callback);

// Used to insert a new row with JSON data
mysqlJson.insert(tableName, dataToInsert, callback);

// Used to update some row(s) matching with JSON conditions
mysqlJson.update(tableName, data, conditions, callback);

// Used to delete some row(s) matching with JSON conditions
mysqlJson.delete(tableName, conditions, callback);