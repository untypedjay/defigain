import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import Home from './pages/Home';
import Portfolios from './pages/Portfolios';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Settings from './pages/Settings';
import New from './pages/New';
import Upload from './pages/Upload';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App/>
  </React.StrictMode>,
  document.querySelector('#root')
);

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/p/:portfolioName" component={Portfolio}/>
        <Route exact path="/portfolios" component={Portfolios}/>
        <Route exact path="/settings" component={Settings}/>
        <Route exact path="/new" component={New}/>
        <Route exact path="/upload" component={Upload}/>
        <Route exact path="/about" component={About}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}
