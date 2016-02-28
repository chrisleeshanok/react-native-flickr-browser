export const DEFAULTS = {
    PAGE: 1,
    PERPAGE: 20
};

export const FLICKR = {
    BASE_URL: 'https://api.flickr.com/services/rest/?',
    ENDPOINTS: {
        INTERESTING_ENDPOINT: 'method=flickr.interestingness.getList',
        SEARCH: 'method=flickr.photos.search&safe_search='
    },
    API_KEY: '&api_key=04e8068926ac0597663542954ef72376',
    EXTRAS: "&extras=owner_name, description, date_taken, date_upload",
    FORMAT: "&format=json&nojsoncallback=1"
};
