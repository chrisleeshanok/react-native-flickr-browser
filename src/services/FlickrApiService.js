'use strict';

const DEFAULTS = {
    PAGE: 1,
    PERPAGE: 20
};

const FLICKR = {
    BASE_URL: 'https://api.flickr.com/services/rest/?',
    ENDPOINTS: {
        INTERESTING_ENDPOINT: 'method=flickr.interestingness.getList',
        SEARCH: 'method=flickr.photos.search&safe_search='
    },
    API_KEY: '&api_key=04e8068926ac0597663542954ef72376',
    EXTRAS: "&extras=owner_name, description, date_taken, date_upload",
    FORMAT: "&format=json&nojsoncallback=1"
};

const buildApiURL = function(endpoint, page = DEFAULTS.PAGE, numresults = DEFAULTS.PERPAGE, string) {
    let url = FLICKR.BASE_URL;
    switch(endpoint) {
        case 'interesting':
            url += FLICKR.ENDPOINTS.INTERESTING_ENDPOINT;
            break;
        case 'search':
            url += FLICKR.ENDPOINTS.SEARCH + '&text=' + string;
            break;
        default:
            url += FLICKR.ENDPOINTS.INTERESTING_ENDPOINT;
    }
    url += '&per_page=' + numresults + '&page=' + page;
    return url + FLICKR.API_KEY + FLICKR.EXTRAS + FLICKR.FORMAT;
}

export default {

    getPhoto: function() {
        //Implement get photo by id
        return "Not Implemented";
    },

    getPhotosBySearch: function(page = DEFAULTS.PAGE, perpage = DEFAULTS.PERPAGE, searchString = 'bokeh') {
        //TODO: Do some validation on the searchString
        return new Promise((resolve, reject) => {
            fetch(buildApiURL('search', page, perpage, searchString))
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
    },

    getInterestingPhotos: function(page = DEFAULTS.PAGE, perpage = DEFAULTS.PERPAGE) {
        return new Promise((resolve, reject) => {
            fetch(buildApiURL('interesting', page, perpage))
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
