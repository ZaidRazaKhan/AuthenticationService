var bunyan = require('bunyan');
function Wuzzle(options) {
    this.log = options.log.child({widget_type: 'wuzzle'});
    this.log.info('creating a wuzzle');
}
Wuzzle.prototype.woos = function () {
    this.log.warn('This wuzzle is woosey.')
}

function reqSerializer(req) {
    return {
        method: req.method,
        url: req.url,
        headers: req.headers
    };
}
var log = bunyan.createLogger({
    name: 'myapp',
    streams: [
    {
      level: 'info',
      stream: process.stdout            // log INFO and above to stdout
    //   path: './myapp-info.log'
    },
    {
        level: 'error',
        path: './myapp-error.log'       //log ERROR and above to a file
    },
    {
        level: 'warn',
        path: './myapp-warn.log'  //log warning and above to a file
    }
    ],
    serializers: {
        req: reqSerializer,
        err: bunyan.stdSerializers.err
    }
});

module.exports = log;