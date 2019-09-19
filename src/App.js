import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import StreamList from './components/streams/StreamList';
import StreamCreate from './components/streams/StreamCreate';
import StreamEdit from './components/streams/StreamEdit';
import StreamShow from './components/streams/StreamShow';
import StreamDelete from './components/streams/StreamDelete';
import Header from './components/Header';
import StreamAbout from './components/streams/StreamAbout';

const App = () => {
    return (
    <div>        
        <BrowserRouter>
          <div>
                <Header />
                <Route path='/' exact component={StreamList} />
                <Route path='/streams/new' exact component={StreamCreate} />
                <Route path='/streams/edit' exact component={StreamEdit} />
                <Route path='/streams/show' exact component={StreamShow}/>
                <Route path='/streams/delete' exact component={StreamDelete} />
                <Route path='/streams/about' exact component={StreamAbout} />
          </div>
        </BrowserRouter>
    </div>
    )
}

export default App;