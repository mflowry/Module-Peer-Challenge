var random = require('./random.js');
var dollars = require('./dollars.js');

module.exports = {

    module : function(){
        var it = random.randomNum();
        var y = dollars.valueUSD(it);
        return 'Account Balance: \n'+ y;
    }


};