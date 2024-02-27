import React from 'react'
import ReactDOM from 'react-dom/client'

const image = (
    <div>
    <img src="https://w.forfun.com/fetch/6d/6d2d4675f8e2f814a48e8ce19cd61c0a.jpeg" width="1000px" height="700px"/>
    <a href='https://aniwatchtv.to/' className="link">Aniwatch</a>
    </div>
)

const Para=()=>(
    <div id="container">
        {image}
        <p id="heading">This is Naruto</p>
    </div>
)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Para/>);