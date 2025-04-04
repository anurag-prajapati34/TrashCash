const mongoose = require('mongoose');
const { Schema } = mongoose;
const trashReportSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  imageUrl:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  city:{
    type:String,
    required:true
  },
  state:{
    type:String,
    required:true
  },
    zip:{
        type:String,
        required:true
    },
    status:{
        type:String,
      default:"pending"
    },
}
, {
  timestamps: true,
});
// Create the TrashReport model using the schema
const TrashReportModel = mongoose.model('TrashReport', trashReportSchema);
// Export the model 
module.exports = TrashReportModel;