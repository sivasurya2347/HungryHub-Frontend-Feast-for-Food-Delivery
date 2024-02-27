import React from 'react';
import ReactDOM  from 'react-dom/client';
// const parent=React.createElement('div',{id:'parent'},
// [React.createElement('div',{id:'child'},
// [React.createElement('h1',{},"I am h1"),React.createElement('h2',{},"I am h2")]),
// React.createElement('div',{id:'child1'},
// [React.createElement('h1',{},"I am h1"),React.createElement('h2',{},"I am h2")])
// ]
// )

// (JSX)=>Babel transpiles it to React.createElement=>Reactelement-js object=>html element
const jsxheading =<h1 id="heading">React using JSX</h1>

// const heading=React.createElement('h1',{id:'heading'},'Hello World By React')
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(jsxheading)