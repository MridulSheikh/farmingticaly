
import {  useState } from 'react';
import { BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom';
import './App.css';
import PageNotfound from './component/404/PageNotfound';
import About from './component/about/about';
import Course from './component/Course/Course';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Home from './component/home/Home';
import MyClass from './my class/MyClass';

function App() {
  //added mayclass 
  const [classes, setClasses]=useState([])
  const HandleClass = course =>{
        const newcourse = [...classes,course];
        setClasses(newcourse);
     }
  return (
    <div className="App">
       <Router>
       <Header></Header>
       <Switch>
       <Route exact path="/">
         <Home>
         <Link to="/service">
         <button type="button" className="btn  btn-outline-success me-4 px-5">Enroll Now</button>
         </Link>
         <Link to="/about">
         <button type="button" className="btn  btn-outline-warning me-4 px-5">About us</button>
         </Link>
         </Home>
       </Route>
         <Route path="/home">
         <Home>
         <Link to="/service">
         <button type="button" className="btn  btn-outline-success me-4 px-5">Enroll Now</button>
         </Link>
         <Link to="/about">
         <button type="button" className="btn  btn-outline-warning me-4 px-5">About us</button>
         </Link>
         </Home>
         </Route>
         <Route path ="/service">
         <Course 
         class ={HandleClass}
         >
         </Course>
         </Route>
         <Route path="/about">
         <About></About>
         </Route>
         <Route path="/cart">
         <MyClass 
         classes={classes}
         ></MyClass>
         </Route>
         <Route>
         <div>
         <PageNotfound>
         <Link to="/home">
         <button type="button" className="btn btn-secondary">Back to home</button>
         </Link>
         </PageNotfound>
         </div>
         </Route>
       </Switch>
       <Footer></Footer>
       </Router>
    </div>
  );
}

export default App;
