/**
 * cleanTitle - cleans a given title string to a simple url format
 *
 * @param {string} title - the title to be cleaned
 *
 * @return {string} the cleaned title
 */
export function cleanTitle(title) {
    return title.replace(/\ /g, '-').toLowerCase();
}
