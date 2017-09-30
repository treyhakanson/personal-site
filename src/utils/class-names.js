/**
 * buildGetClassName - builds a "getClassName" function based on given initial
 * classNames
 *
 * @param  {string|Array} initialClassNames - an initial class or list of
 * classes; the first will be assumed as the base class to which optional
 * modifiers are applies
 * @return {Function} the complete "getClassName" function
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
     * @param  {string|Array}    className - the classname(s) to be added
     * @param  {ArrayOf(string)} modifiers - modifiers to be applied to the base
     * className
     * @return {string} - the final classname to be applied to the component
     */
    return function(additionalClassNames, modifiers) {
        additionalClassNames = cleanClassNames(additionalClassNames);
        if (initialClassNames.length && Array.isArray(modifiers))
            initialClassNames[0] += modifiers.reduce((x, y) => `${x}--${y}`, '');
        let finalClassNames = [...initialClassNames];
        if (additionalClassNames)
            finalClassNames.push(...additionalClassNames);
        if (this.props.className)
            finalClassNames.push(this.props.className);
        return finalClassNames.join(' ');
    };
}
