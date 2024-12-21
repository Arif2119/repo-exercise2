import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./Footer";
import Main from "./Main"; // Updated Main already manages state for BookingForm
import logo from "./logo.png"; // Import the logo

const HomePage = () => {
  return (
    <main className="main">
      {/* Header Section */}
      <header className="header">
        <div className="logoContainer">
          <img className="logo"
            src={logo} // Use imported logo variable
            alt="Little Lemon Logo"
          />
          <h1 className="title">Little Lemon</h1>
        </div>
        <p className="subtiltle">Chicago</p>
        <p className="">
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/booking">
          <button className="button">Reserve a table</button>
        </Link>
      </header>

      {/* Delivery Section */}
      <section className="deliverySection">
        <h2 className="deliveryTitle">ORDER FOR DELIVERY!</h2>
        <div className="categoryButtons">
          <button className="categoryButton">Lunch</button>
          <button className="categoryButton">Mains</button>
          <button className="categoryButton">Desserts</button>
          <button className="categoryButton">A La Carte</button>
          <button className="categoryButton">Specials</button>
        </div>
      </section>
    </main>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav className="nav">
          <Link to="/" className="navLink">
            Home
          </Link>
          <Link to="/booking" className="navLink">
            Book a Table
          </Link>
        </nav>

        {/* Main Routes */}
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<Main />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}
export default App;
