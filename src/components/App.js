import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import List from './layout/List';


class App extends Component {

    render() {
        return (
            <Fragment>
                <Header />
                <List globalList={GlobalList} asctitle={true} ascdate={true} ascvues={true} />
            </Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));