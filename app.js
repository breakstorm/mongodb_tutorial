var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost/tutorial_myapp';

mongo.connect(url, function(err, db) {
	if(err) throw err;
	console.log("database create !!! ");
	db.close();
})

mongo.connect(url, function(err, db) {
	if(err) throw err;
	db.createCollection("customers", function(err, res) {
		if(err) throw err;
		console.log("Collection created!");
		db.close();
	})
})

mongo.connect(url, function(err, db) {
	if(err) throw err;

	var myobj = {
		name: "Company",
		address: "in nearhere"
	}

	db.collection("customers").insertOne(myobj, function(err, res){
		if(err) throw err;

		console.log("1 document inserted");
		db.close();
	})
})

mongo.connect(url, function(err, db) {
	if (err) throw err;
  var myobj = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];
  db.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
})

mongo.connect(url, function(err, db) {
	if(err) throw err;

	db.collection("customers").findOne({}, function(err, result) {
		if(err) throw err;

		console.log(result);
		db.close();
	})
})

mongo.connect(url, function(err, db) {
	if(err) throw err;

	db.collection("customers").find({}).toArray(function(err, result) { 
		if(err) throw err;

		console.log(result);
		db.close();
	})
})

mongo.connect(url, function(err, db) {
	if(err) throw err;

	db.collection("customers").find({address: "Park Lane 38"}).toArray(function(err, result) { 
		if(err) throw err;

		console.log(result);
		db.close();
	})
})

mongo.connect(url, function(err, db) {
	if(err) throw err;

	db.collection("customers").find({address: /^S/}).toArray(function(err, result) { 
		if(err) throw err;

		console.log(result);
		db.close();
	})
})