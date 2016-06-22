AlFehrestNS.Config = function(key) {
    var config = {
        'production' : {
            'url' : 'http://api.alfehrest.org/seera/',
            'startupNodeId' : 'person_241d581b957d9',
            'MAX_REL_COUNT': 7,
            'MAX_NAME_LENGTH' : 50
        },
        'development' :{
            'url' : 'http://localhost:5000/api/',
            'startupNodeId' : 'person_241d581b957d9',
            'MAX_REL_COUNT': 7,
            'MAX_NAME_LENGTH' : 50
        }
    };


    var cfg = config[AlFehrestNS.env];
    if(typeof cfg[key] === 'undefined') {
        throw("Couldn't find configuration key " + key);
    }
    return cfg[key]
    
};