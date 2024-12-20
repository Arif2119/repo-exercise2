import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main"; // Updated Main already manages state for BookingForm
import "./App.css";
import "./gridtwelve.css";

const HomePage = () => (
  <div>
    <Header />
    <main className="App-main">
      <h1>Welcome to Little Lemon!</h1>
      <p>Your favorite restaurant for fresh and delicious meals.</p>
    </main>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src="./logo.svg" className="App-logo" alt="logo" />
          <Header />
        </header>
        <nav className="App-nav-bar">
          <Nav />
          <Link to="/">Home</Link>
          <Link to="/booking">Book a Table</Link>
        </nav>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<Main />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
