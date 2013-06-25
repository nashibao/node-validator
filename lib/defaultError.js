
module.exports = function(locale) {
    if(locale == 'en'){
        err = require('./error/en');
    }else if(locale == 'jp'){
        err = require('./error/jp');
    }else{
        err = require('./error/en');
    }
};
