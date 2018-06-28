require('./polyfills');

// get url to check
const searchUrl = 'https://www.ikea.bg/cooking/Cookware/Pots-and-sauce-pans/pots/snitsig-7952/10129724/';

// get a product
const getProductData = (url) => {
    return fetch(url)
        .then((response) => {
            if(!response.ok) {
                throw new Error('Invalid url');
            }

            return response.text();
        })
        .then((html) => {
            return require('./dom-parser')(html);
        })
        .then(($) => {
            
        })
}

getProductData(searchUrl);

// div.product-detail-info
// div.price