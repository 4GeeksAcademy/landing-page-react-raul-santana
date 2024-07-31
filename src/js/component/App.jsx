import React from 'react';
import MyNavbar from './Navbar.jsx';
import MyJumbotron from './Jumbotron.jsx';
import MyCard from './Card.jsx';
import Footer from './Footer.jsx';
const MyApp = () => (
  <div>
    <MyNavbar />
    <MyJumbotron />
    <div className="container">
      <div className="row">
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
      </div>
    </div>
    <div><Footer/></div>
  </div>
);
export default MyApp;
