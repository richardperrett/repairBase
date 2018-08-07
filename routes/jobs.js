const express = require('express');
const router = express.Router();
const config = require('../config/database');

const Job = require('../models/jobs')

//Add New Job
router.post('/newjob', (req, res) => {
    
     newJob = new Job({
         
        account: req.body.account,
        ref: req.body.ref,
        raised: Date().now,
        status: req.body.initiated,
        repairable: {make: req.body.make,
                     model: req.body.model
                     }
    });
    
    newJob.save((err, doc) => {

        if(!err){res.send(doc);} 
        else { console.log('Error in adding new job ....' + JSON.stringify(err, undefined, 2));

        }

    });

    

});



module.exports = router;
