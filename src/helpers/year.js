/**
 * Handlebars helper that outputs year.
 * @example
 * {{year}}
 * example of output 2019
 */
module.exports = function() {
    var year = new Date().getFullYear();
    return year;
};
