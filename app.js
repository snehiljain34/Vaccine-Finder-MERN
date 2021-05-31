//Basic NPM packages
const express = require("express");
const ejs = require("ejs");

//NPM packages for CowinAPI
const request = require("request");
const https = require("https");
const { dirname } = require("path");
const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

    // const pincode = req.body.email;
    // const data = {
    //     members: [{
    //         email_address: email,
    //         status: "subscribed",
    //     }]
    // };

    // const jsonData = JSON.stringify(data);
    var pincode = "313001";
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var newdate = day + "-0" + month + "-" + year;
    console.log(pincode);
    console.log(newdate);

    const url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin"

    const final_url = url + "?pincode=" + pincode + "&date=" + newdate;
    console.log(final_url);

    https.get(final_url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const APIdata = JSON.parse(data);
            const sessions = APIdata.sessions;
            console.log(sessions);

            sessions.forEach(function(post) {
                console.log(post.center_id);
            })

            res.render("home", {
                sessions2: sessions
            })
        });

    });
    // res.sendFile(__dirname + "/views/index.html")

})



app.listen(3000, function() {
    console.log("Server stared on 3000");
});