import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD

// Create a new component. This component should produce
// some HTML

const App = () => {
    return <div>Hi!</div>;
}

// Take this component's generated HTML
// and put it on the page (in the DOM)
=======
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAI6LAE6iOZS4QtX_ynBuF9Qnp4QcENKIM'

// Create a new component.  This should produce
// some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take the component's generated HTML and put it
// on the page (in the DOM)
>>>>>>> cd44dc605d2ea8ec0920b3d42031ecdebb0767b1

ReactDOM.render(<App />, document.querySelector('.container'));