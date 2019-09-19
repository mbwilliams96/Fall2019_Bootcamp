/* Add all the required libraries*/
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config.js').db
/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.uri, {useNewUrlParser: true});
/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.findOne({'name':'Library West'}, function(err, l){
      console.log(l);
  });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOneAndRemove({'code':'CABL'}, function(err, l){
      console.log(l);
  });
};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */
  // var l = Listing.findOne({'name':'Phelps Laboratory'}, {'address':'1'});
  // l.address = '1';
  // l.save
  // console.log(1);
  Listing.findOneAndUpdate({'name':'Phelps Laboratory'}, {'address':'1953 Museum Rd, Gainesville, FL 32603'}, {new:true}, function(err, l){
      console.log(l);
  });

};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, function(err, listings){
      console.log(listings);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
