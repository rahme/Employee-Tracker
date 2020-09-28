const mysql = require("mysql");
const connectpls = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "insertpassword",
	database: "employee_tracker",
});
connectpls.connect(function(err) {
	if (err) throw err;
});
module.exports = connectpls;