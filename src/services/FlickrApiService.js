'use strict';

const DEFAULTS = {
    PAGE: 1,
    PERPAGE: 20
};

const FLICKR = {
    BASE_URL: 'https://api.flickr.com/services/rest/?',
    ENDPOINTS: {
        INTERESTING_ENDPOINT: 'method=flickr.interestingness.getList'
    },
    API_KEY: '&api_key=04e8068926ac0597663542954ef72376',
    EXTRAS: "&extras=owner_name, description, date_taken, date_upload",
    FORMAT: "&format=json&nojsoncallback=1"
};

const buildApiURL = function() {
    return "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=0a33a72ec4fe7771e771f64b66d16d4c&extras=owner_name%2C+description%2C+date_taken%2C+date_upload&per_page=20&page=1&format=json&nojsoncallback=1";
};

export default {

    getPhoto: function() {
        //Implement get photo by id
        return "Not Implemented";
    },

    getPhotosBySearch: function() {
        //TODO: Implement flickr search fetch by string
        return "Not Implemented"
    },

    getInterestingPhotos: function(page = DEFAULTS.PAGE, perpage = DEFAULTS.PERPAGE) {
        return new Promise((resolve, reject) => {
            fetch(buildApiURL())
            .then((response) => {
                try {
                    console.log(JSON.parse(response._bodyText).photos);
                    resolve(JSON.parse(response._bodyText).photos);
                } catch (error) {
                    reject(error);
                }
            }).catch((error) => {
                reject(error);
            });
        });
    }
};
