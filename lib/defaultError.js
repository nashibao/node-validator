
module.exports = function(locale) {
    if(locale == 'en'){
        err = require('./localization/en');
    }else if(locale == 'jp'){
        err = require('./localization/jp');
    }else{
        err = require('./localization/en');
    }
};
