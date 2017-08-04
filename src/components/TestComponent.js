// external modules
import React, { Component } from 'react';

const CODE = `\
const greet = () => {
    console.log("Hello World!");
}`;

export default () => (
    <div className="TestComponent">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Sub Heading 1</h3>
        <h4>Sub Heading 2</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, nobis aut! Corporis, porro ipsa aliquid architecto aut placeat, nobis officiis eos facere pariatur nostrum impedit nesciunt modi amet natus, sequi.</p>
        <pre><code>{CODE}</code></pre>
    </div>
);
