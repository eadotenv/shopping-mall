import { useState } from "react";
import "./akilidex.css";
import anaSaltImg from "./assets/ana salt.jpg";
import miloImg from "./assets/milo.jpg";
import frutelliImg from "./assets/frutelli-cocktail.jpeg";
import u2SaltImg from "./assets/u2-salt.jpg";
import nidoImg from "./assets/nido.jpg";
import gariImg from "./assets/gari.png";
import ceresImg from "./assets/ceres.jpg";
import perkImg from "./assets/perk.jpg";
import muncheeImg from "./assets/munchee-chocolate.jpg";
import maltImg from "./assets/malt.jpg";
import digestiveImg from "./assets/digestive.jpg";
import shitoImg from "./assets/shito.jpg";
import canationImg from "./assets/canation.jpg";
import chocoImg from "./assets/choco.jpg";
import kalyImg from "./assets/Kalyppo.jpg";

interface Groceries {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
}

const groceries: Groceries[] = [
  {
    id: 1,
    name: "Anapuna Salt",
    location: "Nkawkaw",
    price: 2,
    image: anaSaltImg,
  },
  {
    id: 2,
    name: "Milo",
    location: "Madina",
    price: 52,
    image: miloImg,
  },
  {
    id: 3,
    name: "Frutelli",
    location: "Kasoa",
    price: 43,
    image: frutelliImg,
  },

  {
    id: 4,
    name: "U2 Iodated Salt",
    location: "Santasi",
    price: 2,
    image: u2SaltImg,
  },
  {
    id: 5,
    name: "Chocolate",
    location: "Legon",
    price: 35,
    image: chocoImg,
  },
  {
    id: 6,
    name: "Nido",
    location: "Ablekuma",
    price: 58,
    image: nidoImg,
  },
  {
    id: 7,
    name: "Gari",
    location: "Ho",
    price: 20,
    image: gariImg,
  },
  {
    id: 8,
    name: "Ceres",
    location: "Kwahu",
    price: 37,
    image: ceresImg,
  },
  {
    id: 9,
    name: "Perk",
    location: "Asokwa",
    price: 43,
    image: perkImg,
  },
  {
    id: 10,
    name: "Munchee Biscuit",
    location: "Sofoline",
    price: 26,
    image: muncheeImg,
  },
  {
    id: 11,
    name: "Malt",
    location: "Kaase",
    price: 12,
    image: maltImg,
  },
  {
    id: 12,
    name: "Disgestive",
    location: "Adum",
    price: 18,
    image: digestiveImg,
  },
  {
    id: 13,
    name: "Shito",
    location: "Accra",
    price: 12,
    image: shitoImg,
  },
  {
    id: 14,
    name: "Canation",
    location: "Sunyani",
    price: 9,
    image: canationImg,
  },
  {
    id: 15,
    name: "Kalyppo",
    location: "Winneba",
    price: 5,
    image: kalyImg,
  },
];

function Akilidex() {
  const [saved, setSaved] = useState<Record<number, boolean>>({});
  const [sortBy, setSortBy] = useState<string>("default");
  const [searchLocation, setSearchLocation] = useState<string>("");

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
    <div className="app">
      <nav className="navbar">
        <div className="navbar-brand">Akilidex</div>
      </nav>
      <header className="header">
        <div className="search-container">
          <label htmlFor="location-search">Location</label>
          <input
            id="location-search"
            type="text"
            placeholder="Search by location..."
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
                  GH₵{grocery.price.toLocaleString()}
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
      <footer className="footer">
        <p>&copy; 2026 Eben. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Your one-stop shop for quality provisions across Ghana. We connect customers with quality provisions from across Ghana.

export default Akilidex;
