const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

//retrieving data
router.get('/contacts',(req,res,next)=>{
// res.send('Retrieving contact list');
Contact.find(function(err,contacts){
    res.json(contacts);
})
});

//add contact
router.post('/contact',(req,res,next)=>{
 //   res.send("Adding new contact");

 let newContact = new Contact({
     first_name: req.body.first_name,
     last_name : req.body.last_name,
     phone: req.body.phone
 });

 newContact.save((err,contact)=>{
     if (err){
         res.json({msg:"Failed to add contact"});
     }
     else{
         res.json({msg:"Contact added successfully"});
     }
 })
});


//deleting contact
router.delete('/contact/:id',(req,res,next)=>{
  //  res.send("Deleting contact");
  Contact.remove({_id: req.params.id},(err,result)=>{
      if(err){
          res.json(err);
      }
      else{
          res.json(result);
      }
  })
})




module.exports = router;