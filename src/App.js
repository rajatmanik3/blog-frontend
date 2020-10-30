import React, { Component } from 'react';
import Navbar from './components/shared/navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blogs from './components/blogs/Blogs'
import BlogDetail from './components/blogs/blog-detail/BlogDetail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Blogs} />
            <Route exact path='/blog/:blogId' component={BlogDetail} />
          </Switch>
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
