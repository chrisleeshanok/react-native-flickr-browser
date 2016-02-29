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

    getPhotosBySearch: (searchString, page = DEFAULTS.PAGE, perpage = DEFAULTS.PERPAGE) => {

        //Fallback to the interesting endpoint if no search term provided
        let endpoint = (!searchString) ? 'interesting': 'search';

        return new Promise((resolve, reject) => {
            fetch(buildApiURL(endpoint, page, perpage, searchString))
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

    //Unused for now. Was planning on using this for a separate feature
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
