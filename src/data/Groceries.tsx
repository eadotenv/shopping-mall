import type { Groceries } from "../entities/GroceriesData";
import anaSaltImg from "../assets/ana salt.jpg";
import miloImg from "../assets/milo.jpg";
import frutelliImg from "../assets/frutelli-cocktail.jpeg";
import u2SaltImg from "../assets/u2-salt.jpg";
import chocoImg from "../assets/choco.jpg";
import nidoImg from "../assets/nido.jpg";
import gariImg from "../assets/gari.png";
import ceresImg from "../assets/ceres.jpg";
import perkImg from "../assets/perk.jpg";
import muncheeImg from "../assets/munchee-chocolate.jpg";
import maltImg from "../assets/malt.jpg";
import digestiveImg from "../assets/digestive.jpg";
import shitoImg from "../assets/shito.jpg";
import canationImg from "../assets/canation.jpg";
import kalyImg from "../assets/Kalyppo.jpg";

export const groceries: Groceries[] = [
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
