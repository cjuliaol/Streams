import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import StreamList from './components/streams/StreamList';
import StreamCreate from './components/streams/StreamCreate';
import StreamEdit from './components/streams/StreamEdit';
import StreamShow from './components/streams/StreamShow';
import StreamDelete from './components/streams/StreamDelete';
import Header from './components/Header';
import StreamAbout from './components/streams/StreamAbout';
import history from './history';

const App = () => {
    return (
    <div>        
        <Router history={history}>
          <div>
                <Header />
                <Switch>
                <Route path='/' exact component={StreamList} />
                <Route path='/streams/new' exact component={StreamCreate} />
                <Route path='/streams/edit/:id' exact component={StreamEdit} />
                <Route path='/streams/:id' exact component={StreamShow}/>
                <Route path='/streams/delete/:id' exact component={StreamDelete} />
                <Route path='/streams/about' exact component={StreamAbout} />
                </Switch>
          </div>
        </Router>
    </div>
    )
}

export default App;