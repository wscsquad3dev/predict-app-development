var express = require('express');
var bodyParser = require('body-parser');
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyirrK4bb7Y1D2yp'}).base('appsNzWVTXkqOLhbL');

//=========== Create server ===================
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src'));

app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//=========== Location data API  ===================
app.post('/get-location', function(req, res) {

    var data = {};
    var post = req.body;
    var yyyy = post.sel_year;
    var mm = post.sel_month;
    var dd = post.sel_day;
    var station = post.station;
    var stcode = post.st_code;
    console.log(yyyy + ":" + mm + ":" + dd);
    var table_name = station + '' + stcode + '_allweather_' + yyyy;
    console.log('table : ' + table_name);
    
    base(table_name).select({
        
        view: "Grid view",
        filterByFormula:"({Day}=\"" + +dd + "\")"
        // maxRecords: 1,
        // fields: ["Day", "Max_Temp"],
        
    }).firstPage(function(err, records) {
        if (err) {
            console.error(err);
            res.json({ status: false });
            return;
        }
        records.forEach(function(record) {
            console.log('Retrieved', record.fields);
            res.json({ status: true, data: record.fields });
        });
    });
});

app.listen(3000, function () {
	console.log('Prediction Server is running on port: 3000');
});

app.post("get-sprint-graph", function(req, res) {
    res.json({ status: false });
});
