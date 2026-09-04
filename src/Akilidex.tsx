import { useState } from "react";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import "./css/akilidex.css";
import { groceries } from "./data/Groceries";

function Akilidex() {
  const [saved, setSaved] = useState<Record<number, boolean>>({});
  const [sortBy, setSortBy] = useState<string>("default");
  const [searchLocation, setSearchLocation] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSave = (id: number) => {
    setSaved((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredAndSortedGroceries = [...groceries]
    .filter((grocery) =>
      grocery.location.toLowerCase().includes(searchLocation.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortBy === "low") return a.price - b.price;
      if (sortBy === "high") return b.price - a.price;
      return a.id - b.id;
    });

  return (
    <>
      <div className="app">
        <nav className="navbar">
          <div className="navbar-brand">
            <div className="navbar-logo">
              <span className="logo-initials">AM</span>
            </div>
            <span className="navbar-title">Akilidex Mall</span>
          </div>
          <ul className="navbar-links">
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <div className="navbar-right">
            <div className="navbar-icons">
              <button className="icon-btn" aria-label="Cart">
                <FiShoppingCart size={20} />
              </button>
              <button className="icon-btn" aria-label="Account">
                <FiUser size={20} />
              </button>
            </div>
            <button
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          <div className={`navbar-menu ${mobileMenuOpen ? "open" : ""}`}>
            <ul className="navbar-links-mobile">
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </nav>
        <header className="header">
          <div className="search-container">
            <FiSearch className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search location..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="sort-container">
            <label htmlFor="sort-select">Sort by price</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="default">Default</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>
        </header>
        <div className="grid">
          {filteredAndSortedGroceries.map((grocery) => (
            <div key={grocery.id} className="card">
              <div className="card-image">
                <img src={grocery.image} alt={grocery.name} />
              </div>
              <div className="card-body">
                <h2 className="card-title">{grocery.name}</h2>
                <p className="card-location">{grocery.location}</p>
                <div className="card-footer">
                  <span className="card-price">
                    GH₵{grocery.price.toFixed(2)}
                  </span>
                  <button
                    className={`save-btn ${saved[grocery.id] ? "saved" : ""}`}
                    onClick={() => toggleSave(grocery.id)}
                  >
                    {saved[grocery.id] ? "Saved" : "Save"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
        <p>Your one-stop shop for quality provisions across Ghana. We connect customers with quality provisions from across Ghana.</p>
        <p>&copy; 2026 Eben. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Akilidex;
