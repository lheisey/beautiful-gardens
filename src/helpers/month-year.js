/**
 * Handlebars helper that outputs month-year.
 * @example
 * {{month-year}}
 * example of output 2-2019
 */
module.exports = function() {
    var month = new Date().getMonth() +1;
    var year = new Date().getFullYear();
    return month + '-' + year;
};
