import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MidHome from './Components/MidHome';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import SingleCouses from './Components/SingleCouses';
import SearchContent from './Components/SearchContent';
import Cart from './Components/Cart';
import SearchContentnone from './Components/SearchContentnone';
import SingleCousesnone from './Components/SingleCousesnone';

function App() {
  let res = localStorage.getItem('email') !== null;
  const [islogin, setIslogin] = useState(res);
  const [searchVal, setsearchVal] = useState("");
  const [count, setcount] = useState(JSON.parse(localStorage.getItem('cart'))?JSON.parse(localStorage.getItem('cart')).length:0);
  const [startSearch, setstartSearch] = useState(false);
  const [data, setData] = useState(JSON.parse(localStorage.getItem('cart'))?JSON.parse(localStorage.getItem('cart')):[]);
  if (startSearch === true) {
    setTimeout(() => { setstartSearch(false) }, 2000)
  }
  return (
    <div className="App" >
      <Router basename="/udemy">
        <Navbar islogin={islogin} setIslogin={setIslogin} searchVal={searchVal} setsearchVal={setsearchVal} setstartSearch={setstartSearch} data={data}  setData={setData} count={count}  setcount={setcount}/>
        {startSearch ? <Redirect to={`/search/${searchVal.split(' ').join('-').split('|').join('')}`} /> : null }
        <Switch>
          <Route exact path="/"><MidHome setsearchVal={setsearchVal} startSearch={startSearch} setstartSearch={setstartSearch}  /></Route>
          <Route exact path={`/courses/`}><SingleCousesnone /> </Route>
          <Route exact path={`/search/`}><SearchContentnone /> </Route>
          <Route path={`/courses/:topicId`}><SingleCouses setData={setData} data={data} setcount={setcount} islogin={islogin}/> </Route>
          <Route path={`/search/:topicId`}><SearchContent val={searchVal} /> </Route>
          <Route path={`/cart`}><Cart data={data} setData={setData} count={count} setcount={setcount} /> </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
