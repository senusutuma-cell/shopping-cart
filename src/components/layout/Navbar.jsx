import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

function Navbar() {
  const { items } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
            🛍️ ShopCart
          </NavLink>

          <div className="navbar-links navbar-links--desktop">
            <NavLink to="/" className="navbar-link" onClick={closeMenu} end>
              Home
            </NavLink>
            <NavLink to="/shop" className="navbar-link" onClick={closeMenu}>
              Shop
            </NavLink>
            <NavLink to="/wishlist" className="navbar-link" onClick={closeMenu}>
              Wishlist
            </NavLink>
            <NavLink to="/cart" className="navbar-link" onClick={closeMenu}>
              Cart <span className="navbar-cart-badge">{itemCount}</span>
            </NavLink>
          </div>

          <button
            className="navbar-bag-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {itemCount > 0 && <span className="navbar-bag-btn__dot">{itemCount}</span>}
          </button>
        </div>
      </nav>

      <div
        className={`navbar-scrim ${menuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
      />

      <div
        className={`navbar-panel ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="navbar-panel__close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          ✕
        </button>

        <NavLink to="/" className="navbar-panel__link" onClick={closeMenu} end>
          <span>🏠</span> Home
        </NavLink>
        <NavLink to="/shop" className="navbar-panel__link" onClick={closeMenu}>
          <span>🛍️</span> Shop
        </NavLink>
        <NavLink to="/wishlist" className="navbar-panel__link" onClick={closeMenu}>
          <span>♡</span> Wishlist
        </NavLink>
        <NavLink to="/cart" className="navbar-panel__link" onClick={closeMenu}>
          <span>🛒</span> Cart ({itemCount})
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;