
module.exports = function(locale) {
    if(locale == 'en'){
        return require('./localization/en');
    }else if(locale == 'jp'){
        return require('./localization/jp');
    }else{
        return require('./localization/en');
    }
};
