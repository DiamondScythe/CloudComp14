var mongoose = require('mongoose');
//console.log(process.env.MongoDB_URL);
// use heroku var config to access to AtLas mongoDB url 
mongoose.connect(process.env.MongoDB_URL || 'mongodb://localhost:27017/toy_store_dev' ,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var conn = mongoose.connection;
conn.on('connected', function () {
    console.log('database is connected successfully');
});
conn.on('disconnected', function () {
    console.log('database is disconnected successfully');
});
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;
