import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        backdropFilter: "blur(20px)",
        background: "rgba(2,6,23,0.75)",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "auto",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        {/* Logo */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}
        >
          <div
            style={{
              fontSize: "30px"
            }}
          >
            🧠
          </div>

          <h2
            style={{
              color: "white",
              fontWeight: "700"
            }}
          >
            ResearchMind
            <span
              style={{
                color: "#3B82F6"
              }}
            >
              {" "}
              AI
            </span>
          </h2>
        </div>

        {/* Menu */}

        <div
          style={{
            display: "flex",
            gap: "35px",
            color: "white",
            fontWeight: "500"
          }}
        >
          <a href="/">Home</a>
          <a href="/">Features</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>

        {/* Buttons */}

        <div
          style={{
            display: "flex",
            gap: "15px"
          }}
        >
          <button
            style={{
              padding: "10px 22px",
              background: "transparent",
              color: "white",
              border: "1px solid #3B82F6",
              borderRadius: "10px"
            }}
          >
            Login
          </button>

          <button
            style={{
              padding: "10px 24px",
              background: "linear-gradient(90deg,#3B82F6,#8B5CF6)",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontWeight: "600"
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;