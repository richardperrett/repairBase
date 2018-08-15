const express = require('express');
const router = express.Router();
const config = require('../config/database');

const Job = require('../models/jobs');

//Add New Job
router.post('/newjob', (req, res) => {
    
     newJob = new Job({

        account: req.body.account,
        ref: req.body.ref,
        model: req.body.model,
        make: req.body.make

     });      
        

    newJob.save((err, doc) => {

        if(!err){res.send(doc);} 
        else { console.log('Error in adding new job ....' + JSON.stringify(err, undefined, 2));

    }



});



});

router.get( '/', (req, res) => {

    Job.find((err, docs) => {

        if(!err) {res.send(docs); }
        else { console.log('Error retrieving Jobs info ...' + JSON.stringify(err, undefined, 2)); }
    });


});



module.exports = router;
