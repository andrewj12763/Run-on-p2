const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
 IdeaSchema = new Schema({
  title:{
    type: String,
    // required: true
  }
});

mongoose.model('ideas', IdeaSchema);