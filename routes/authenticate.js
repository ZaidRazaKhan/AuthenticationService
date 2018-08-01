var express           =   require('express');
var router            =   express.Router();
var authenticate      =   require('../services/authenticate');
var logger            =   require('../logger/log');


router.post('/', function(req, res,next){
  var username = req.body.username;
  var password = req.body.password;
  
  function doThisAfterGettingAuthenticationResponse(userValidationInfo){
    if(password == userValidationInfo.password){
      logger.info('The username and password are matched from the database and the result sent is: '+JSON.stringify({isValid:true}));
      res.send({isValid:true});
    }
    else{
      logger.info('The username and password is not matched from the database and the result sent is: '+JSON.stringify({isValid:true}));
      res.send({isValid:false});
    }
  }
  logger.info("Going to call the authenticatorService for validating and proceeding with username: "+req.body.username);
  authenticate(req.body.username, doThisAfterGettingAuthenticationResponse);
});
module.exports = router;