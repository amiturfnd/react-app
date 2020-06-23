import React from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';
import AppNav from './components/AppNav';
import CoursesView from './views/CoursesView';
import AppFooter from './components/AppFooter';
import PageNotFound from './views/PageNotFound';
import CoursesLayout from './views/CoursesLayout';
import CreateLayout from './views/CreateLayout';
import './styles/app.scss';

class KatacodaApp extends React.Component {
  render() {
    return (
      <>
        <Router>
          <AppNav></AppNav>
          <Switch>
            <Redirect exact from="/katacoda" to="/katacoda/courses" />
            <Route exact path="/katacoda/courses">
              <CoursesLayout />
            </Route>
            <Route exact path="/katacoda/courses/:id">
              <CoursesView />
            </Route>
            <Route exact path="/katacoda/create">
              <CreateLayout />
            </Route>
            <Route path="/katacoda/*">
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
        <AppFooter></AppFooter>
      </>
    );
  }
}

export default KatacodaApp;