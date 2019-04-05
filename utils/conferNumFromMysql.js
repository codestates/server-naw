const mysql = require("mysql");

var nawdb = mysql.createConnection({
  host: "naw-database.chme0ovxctni.ap-northeast-2.rds.amazonaws.com",
  user: "naw",
  password: "watchdogs",
  database: "naw_db",
  port: "13306"
});

nawdb.connect(err => {
  if (err) throw err;
  nawdb.query("SELECT CONFERNUM FROM COMM", (err, result, fields) => {
    if (err) throw err;
    console.log(result[0]);
  });
});
