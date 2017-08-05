// external modules
import hljs from 'highlight.js';

 /**
  * highlight - provides syntax highlighting for the given html node.
  *
  * @param  {node} node an html node
  */
export function highlight(node) {
    hljs.highlightBlock(node);
}
