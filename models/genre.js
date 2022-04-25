var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreInstanceSchema = new Schema(
    {
        name:{type:String, required:true, minlength:3, maxlength:100},
    }
)

GenreInstanceSchema.virtual('url').get(function(){
    return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('GenreInstance', GenreInstanceSchema)