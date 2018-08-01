var authenticationClient            =   require('../clients/authentication_service_clients/authenticate');
var logger                          =   require('../logger/log');
autheticateUsernameAndPassword      =   function(uName,callBackAfterGettingValidation){
    var obj = JSON.stringify({
        'username' : uName
    });
    console.log('Created the data in the format required by Authentication Service + ' + obj);
    return authenticationClient(obj, callBackAfterGettingValidation);
}
module.exports = autheticateUsernameAndPassword;