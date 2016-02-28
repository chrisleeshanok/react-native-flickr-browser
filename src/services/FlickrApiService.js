'use strict';
import {DEFAULTS, FLICKR} from '../constants/constants';


const buildApiURL = (endpoint, page = DEFAULTS.PAGE, numresults = DEFAULTS.PERPAGE, string) => {
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

    getPhoto: () => {
        //Implement get photo by id
        return "Not Implemented";
    },

    getPhotosBySearch: (page = DEFAULTS.PAGE, perpage = DEFAULTS.PERPAGE, searchString = 'bokeh') => {
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

    getInterestingPhotos: (page = DEFAULTS.PAGE, perpage = DEFAULTS.PERPAGE) => {
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
