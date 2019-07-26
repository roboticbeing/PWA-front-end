var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);


var personalProfileSchema = new Schema ({
    addressStreet: String,
    adressCity: String,
    addressRegion: String,
    addressCountry: String,
    addressPostal: String,
    photo: String,
    citizenship: String,
    passportNumber: String,
    passportPhoto: String,
    documents: [{type: String}],
    financialCards: [{type: String}],
    medical: String
})


// Make schemas available to the application
module.exports = personalProfileSchema;

