var config = require("../config/db.config");
const sql = require("mssql");

//get dashboard inbound outbound count
exports.inbound_outboundCount = (request, res) => {
    var conn = new sql.ConnectionPool(config);
    conn.connect()
        //successfull connection
        .then(function() {
            //create request instance,passing in connection instance

            var req = new sql.Request(conn);
            console.log("entered");

            req.input("warehouseID", request.query.warehouseID);
            req.input("PickerID", request.query.PickerID);

            //Execute store produre

            req.execute("spGetDashboardCount", function(err, recordsets, returnValue) {
                if (err) res.send(err)
                else
                if (recordsets.output != null && recordsets.output.error_msg != null & recordsets.output.error_msg != "") {
                    res.send(200, {
                        "error": 1,
                        "msg": recordsets.output.error_msg
                    })
                } else {
                    res.send({
                        "errors": 0,
                        "data": recordsets.recordset
                    }, 200)
                }
            })
        })

    //handle connection errors
    .catch(function(err) {
        console.log(err);
        conn.close();
    })
}