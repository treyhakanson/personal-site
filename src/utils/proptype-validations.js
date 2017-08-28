/**
 * validateFromObject - generates a proptype validation function to ensure that
 * a given prop value is within the given dictionary.
 *
 * @param {type} obj - the dictionary to check against
 *
 * @return {type} the validation function
 */
export const validateFromObject = obj => {
    return (props, propName, componentName) => {
        if (props[propName] && !obj[props[propName]]) {
            return new Error(
                `Invalid prop \`${propName}\` supplied to ` +
                `\`${componentName}\`. Must be one of: ` +
                Object.values(obj).map(v => v).join(', ')
            );
        }
    };
};
