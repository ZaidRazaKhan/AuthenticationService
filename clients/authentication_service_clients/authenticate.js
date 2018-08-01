var http                    =   require('http');
var connectionParam         =   require('./configuration')();
var logger                  =   require('../../logger/log');
connectionParam.method      =   'POST';
connectionParam.path        =   '/users';
var responseData;
function getRequest(callbackFunction){
    return http.request(connectionParam, function(res){
        logger.info("We got the response from the database service");
        var  msg = '';
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            msg += chunk;
        });
        res.on('end', function() {
            logger.info("the response that we got from database service and we started parsing into JSON and the response is : " );
            logger.info(msg);
            responseData = JSON.parse(msg);
            callbackFunction(responseData);
        });
    });

};
function authenticationClientCreator(data, callBackAfterGettingValidation){
    var req = getRequest(callBackAfterGettingValidation);
    logger.info("Client is created with data : " + data);
    req.end(data);
}

module.exports = authenticationClientCreator;