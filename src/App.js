import React from 'react';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage"
import BookingPage from './pages/BookingPage';
import {  Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
      <div className='App'>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Booking" element={<BookingPage />}></Route>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
