// external modules
import React, { Component, PropTypes } from "react";

// custom modules
import { INPUT_TYPES } from "utils/constants";

/**
 * TextInputBase - An abstract class upon which the other text inputs are built.
 * Provides error styling, basic propType validations, and basic defaultProps.
 * @extends Component
 */
class TextInputBase extends Component {
   static propTypes = {
      placeholder: PropTypes.string,
      onChange: PropTypes.func,
      onBlur: PropTypes.func,
      required: PropTypes.bool
   };

   static defaultProps = {
      type: "text",
      value: "",
      required: false
   };

   constructor(props) {
      super(props);
      this.state = {
         error: false
      };
   }

   /**
    * onChange - fires on change of a text inputs value, applying error styles
    * if needed and invoking the `onChange` callback on the `props` object, if
    * needed.
    *
    * @param {string} val the new value of the input field
    */
   onChange({ target: { value: val } }) {
      this.setState({ error: !val && this.props.required });
      this.props.onChange && this.props.onChange(val);
   }

   /**
    * onChange - fires on blurring of a text input, applying error styles if
    * needed and invoking the `onBlur` callback on the `props` object, if
    * needed.
    *
    * @param {string} val the new value of the input field
    */
   onBlur({ target: { value: val } }) {
      this.setState({ error: !val && this.props.required });
      this.props.onBlur && this.props.onBlur(val);
   }
}

/**
 * verifyValueProp - A proptype validation that ensures that a given
 * `value` prop's type matches the expected type, as per the
 * `type` prop.
 *
 * @param {type} props         the props
 * @param {type} propName      the name of the prop in question
 * @param {type} componentName the name of the component
 */
function verifyValueProp(props, propName, componentName) {
   if (props[propName] == undefined)
      return new Error(
         "`" + propName + "` must be supplied to" + " `" + componentName + "`."
      );

   const valueType = typeof props[propName];
   const type = props.type || Input.defaultProps.type;

   switch (type) {
      case "number":
         if (valueType != "number")
            return new Error(
               "Invalid prop `" +
                  propName +
                  "` supplied to" +
                  " `" +
                  componentName +
                  "`. Since `type` prop was " +
                  "specified as " +
                  type +
                  ", " +
                  propName +
                  " must" +
                  " be of type `number`."
            );
      case "text":
         if (valueType != "string")
            return new Error(
               "Invalid prop `" +
                  propName +
                  "` supplied to" +
                  " `" +
                  componentName +
                  "`. Since `type` prop was " +
                  "specified as " +
                  type +
                  ", " +
                  propName +
                  " must" +
                  " be of type `string`."
            );
   }
}

/**
 * Input - A single line input field.
 * @extends TextInputBase
 */
class Input extends TextInputBase {
   static propTypes = {
      ...TextInputBase.propTypes,
      type: PropTypes.oneOf(Object.values(INPUT_TYPES)),
      value: verifyValueProp
   };

   render() {
      const classNames = ["TextInput--Line", "margin-bottom--md"];
      if (this.state.error) classNames.push("TextInput--error");

      return (
         <input
            className={classNames.join(" ")}
            type={this.props.type}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.onChange.bind(this)}
            onBlur={this.onBlur.bind(this)}
         />
      );
   }
}

/**
 * Area - A text area input.
 * @extends TextInputBase
 */
class Area extends TextInputBase {
   static propTypes = {
      ...TextInputBase.propTypes,
      value: PropTypes.string
   };

   render() {
      const classNames = ["TextInput--Area", "margin-bottom--md"];
      if (this.state.error) classNames.push("TextInput--error");

      return (
         <textarea
            className={classNames.join(" ")}
            rows={this.props.lines}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.onChange.bind(this)}
            onBlur={this.onBlur.bind(this)}
         />
      );
   }
}

export default {
   Line: Input,
   Area
};
