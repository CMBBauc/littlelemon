import React from 'react';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import {  Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Booking" element={<BookingPage />}></Route>
        </Routes>
        <Footer />
      </>
  );
}

export default App;
