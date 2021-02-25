import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Settings from './pages/Settings';
import New from './pages/New';
import Upload from './pages/Upload';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
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
        <Route exact path="/settings" component={Settings}/>
        <Route exact path="/new" component={New}/>
        <Route exact path="/upload" component={Upload}/>
        <Route exact path="/about" component={About}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
