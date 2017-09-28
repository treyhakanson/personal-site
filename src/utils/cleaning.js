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

/**
 * validateEmail - checks if a given email is in a valid format.
 *
 * @param {string} email - the email to check.
 *
 * @return {boolean} whether or not the email is valid
 */
export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
