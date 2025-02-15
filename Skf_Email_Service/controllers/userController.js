var config = require("../config/db.config");
const sql = require("mssql");

//post user

exports.verifyUser = (request, res) => {
    var conn = new sql.ConnectionPool(config);
    conn.connect()

    //successfull connection
    .then(function() {
        var req = new sql.Request(conn);
        console.log("entered");

        req.input("Email", request.body.Email);
        req.input("Password", request.body.Password);

        //Execute store produce

        req.execute("spVerifyUser", function(err, recordsets, returnValue) {
            if (err) res.send(err)
            else
            if (recordsets.output != null && recordsets.output.error_mg != null && recordsets.output.error_mg != "") {
                res.send(200, {
                    "error": 1,
                    "msg": recordsets.error_mg
                })
            } else {
                res.send({
                    "errror": 0,
                    "msg": recordsets.recordset
                })
            }
        })

    })

    //Handle  connection error
    .catch(function(error) {
        console.log(error);
        conn.close();
    });
}