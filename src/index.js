import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyAI6LAE6iOZS4QtX_ynBuF9Qnp4QcENKIM'



// Create a new component.  This should produce
// some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
            // this.setState({videos: videos});
        });

    }
    render () {
        return (
        <div>
            <SearchBar />
        </div>
        );
    }
}

// Take the component's generated HTML and put it
// on the page (in the DOM)


ReactDOM.render(<App />, document.querySelector('.container'));