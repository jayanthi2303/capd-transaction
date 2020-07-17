const mysql = require("mysql");
var sqlConnection = mysql.createConnection({
    host : "den1.mysql4.gear.host",
    user : "webdata4",
    password : "Yy3Ni~8zE8k_",
    database : "webdata4",
    multipleStatements : true
});

//MySQL details
sqlConnection.connect((err)=>{
    if(!err)
    {
        console.log("Connection Established Successfully'");
    }
    else{
            console.log("'Connection Failed!'+ JSON.stringify(err,undefined,2)");
    }
});

module.exports = sqlConnection;