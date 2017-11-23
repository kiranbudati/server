var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://kirancse:kirancse@ds149335.mlab.com:49335/kirancse-crud',{ useMongoClient: true });
 
module.exports = connection;