import "./globals.css"; 
import Link from "next/link";

export const metadata = {
  title: "Nelo Pharmacy",
  description: "Website built by Silindile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="/main.js" defer></script>
      </head>

      <body>

        {/* HEADER */}
        <header>
          <nav className="navbar">
            <div className="nav-container">

              <div className="nav-logo">
                <Link href="/">
                  <img src="/images/logo.png" alt="Nelo Pharmacy Logo" />
                </Link>
              </div>

              <ul className="nav-menu" id="navMenu">
                <li className="nav-item">
                  <Link href="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link href="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link href="/services" className="nav-link">Services</Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className="nav-link">Contact</Link>
                </li>
              </ul>

              <div className="nav-toggle" id="navToggle">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>

            </div>
          </nav>
        </header>

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-content">

              <div className="footer-section">
                <img src="/images/footer-logo.png" alt="Nelo Pharmacy Logo" className="footer-logo" />
                <p>Your trusted healthcare partner</p>
              </div>

              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Contact</h4>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@nelopharmacy.com</p>
              </div>

            </div>

            <div className="footer-bottom">
              <p>&copy; 2025 Digital Pen Media. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
