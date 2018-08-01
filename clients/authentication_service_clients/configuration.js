var options = {
    host:'localhost',
    port:'3005',
    path:'',
    method:'',
    headers:{
        'Content-Type': "application/json"
    }
}
module.exports = function getConnectionParams(){
    return JSON.parse(JSON.stringify(options));
}