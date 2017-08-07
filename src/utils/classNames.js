/**
 * buildGetClassName - builds a "getClassName" function based on given initial
 * classNames
 *
 * @param  {string|Array} initialClassNames - an initial class or list of
 *                                            classes
 * @return {Function}                       - the complete "getClassName"
 *                                            function
 */
export function buildGetClassName(initialClassNames) {
    const cleanClassNames = classNames => {
        let finalClassNames;
        if (classNames && Array.isArray(classNames)) {
            finalClassNames = classNames;
        } else if (classNames) {
            finalClassNames = [classNames];
        } else {
            finalClassNames = [];
        }
        return finalClassNames;
    };

    initialClassNames = cleanClassNames(initialClassNames);

    /**
     * (anonymous) - generates the classname for the button based on props and
     * arguments.
     *
     * @param  {string|Array} className - the classname(s) to be added
     * @return {string}                 - the final classname to be applied to the
     *                                    component
     */
    return function(additionalClassNames) {
        additionalClassNames = cleanClassNames(additionalClassNames);
        if (additionalClassNames)
            Array.prototype.push.apply(initialClassNames, additionalClassNames);
        if (this.props.className)
            initialClassNames.push(this.props.className);
        return initialClassNames.join(' ');
    };
}
