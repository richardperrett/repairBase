const mongoose = require('mongoose');
const config = require('../config/database');

//User Schema

const JobSchema = mongoose.Schema({

    Account:    String,
    ref:        String,
    raised:     String,
    status:     String,
    repairable: { 
                 make: String ,
                 model: String,
                 calibre: String,
                 notes: String,
                },

    Images:     [ {ImageCaption: String, ImageURL: String}],           

    customer:   { firstName: String,
                Surname: String,
                EmailAddress: String,
                Landline: String,
                Mobile: String,
                Notes: String,            
                },
                
    Parts:      { PartName: String,
                  PartRef:  String,
                  Supplier: String,
                  OrderRef: String,
                  Cost: Number,
                  Arrived: Boolean,
                  Expected: Date
    
                 },
                 
    Events:     [ { Timestamp: Date,
                    EventType: String,
                    Detail: String,
                    User_Id: String,  
                    }]             
               
});

const Job = module.exports = mongoose.model('Job', JobSchema);

module.exports.getJobById = function(id, callback){
    Job.findById(id, callback);
}

