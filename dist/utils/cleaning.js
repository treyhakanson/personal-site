"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateEmail = validateEmail;
/**
 * validateEmail - checks if a given email is in a valid format.
 *
 * @param {string} email - the email to check.
 *
 * @return {boolean} whether or not the email is valid
 */
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}