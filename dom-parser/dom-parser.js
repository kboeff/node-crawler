const initDomParser = (html) => {
    return new Promise((resolve) => {
        require('jsdom')
            .env('', (err, window) => {
                if (err) {
                    console.error(err);
                    return;
                }
            
                const $ = require('jquery')(window);
                resolve($);
        });
    });
};

module.exports = initDomParser;