import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyAI6LAE6iOZS4QtX_ynBuF9Qnp4QcENKIM'

// Create a new component.  This should produce
// some HTML
const App = () => {
    return <div>Hi!</div>;
}

// Take the component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));