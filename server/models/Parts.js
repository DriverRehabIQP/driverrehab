
const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  parts_name: {
    type: String,
    required:true
  },

});

 module.exports  = Parts= mongoose.model('parts', CarSchema);
