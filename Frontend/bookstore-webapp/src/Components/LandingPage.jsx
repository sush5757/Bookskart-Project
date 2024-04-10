import React from 'react';
import Navbar from './Navbar';
//import Navbar from '../Header/Navbar';
//import { Footer1 } from '../Footer/Footer1';


const LandingPage = () => {

  return (
    <div className="container-fluid">
        <Navbar/>
      <section className="py-5 text-center">
        <div className="container">
          <h1 className="display-4">Welcome to Our Bookstore</h1>
          <p className="lead">Discover a wide range of books at your fingertips</p>
          <a className="btn btn-primary btn-lg" href="#" role="button">Browse Books</a>
        </div>
      </section>
      {/* <Footer1/> */}
      
    </div>
  );
};

export default LandingPage;
