import React, { useState } from "react";
import "./Books.css";

const books = [
  {
    id: 1,
    title: "Reasoning Mastery",
    author: "R.S. Aggarwal",
    price: "₹450",
    image: "/images/reasoning.jpeg",
    link: "https://amzn.in/d/gRdIi14",
  },
  {
    id: 2,
    title: "Aptitude Skills",
    author: "Arun Sharma",
    price: "₹499",
    image: "/images/aptitude.jpeg",
    link: "https://amzn.in/d/9voi2fZ",
  },
  {
    id: 3,
    title: "Placement Tips",
    author: "Expert Panel",
    price: "₹299",
    image: "/images/placement_tips.jpeg",
    link: "https://amzn.in/d/4QRJJCO",
  },
  {
    id: 4,
    title: "HR Interview Guide",
    author: "Career Guru",
    price: "₹399",
    image: "/images/hr_interview.jpeg",
    link: "https://amzn.in/d/jksshdd",
  },
  {
    id: 5,
    title: "Coding Interview",
    author: "Narasimha Karumanchi",
    price: "₹699",
    image: "/images/coding_interview.jpeg",
    link: "https://amzn.in/d/a4NFh5r",
  },
];

const Books = () => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="books-container">
      {/* Header with Logo and Cart */}
      <header className="books-header">
        <div className="header-top">
          <img src="/images/ppklogo.jpg" alt="PPK Logo" className="logo" />
          <h1>Placement Preparation Kit</h1>
          <div className="cart-display">🛒 Cart: {cart.length}</div>
        </div>
        <p>📚 Explore our curated books for placements</p>
      </header>

      {/* Search */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Books Grid */}
      <div className="books-grid">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} className="book-img" />
            <h3>{book.title}</h3>
            <p className="author">{book.author}</p>
            <p className="price">{book.price}</p>
            <div className="btn-group">
              <button onClick={() => addToCart(book)} className="cart-btn">
                ➕ Add to Cart
              </button>
              <a href={book.link} target="_blank" rel="noopener noreferrer">
                <button className="buy-btn">🛒 Buy Now</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
