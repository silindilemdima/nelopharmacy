import Image from "next/image";
import "./home.css"; // your CSS file

export default function Homepage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <a href="/">
              <Image
                src="/images/logo.png" // public/images/logo.png
                width={120}
                height={60}
                alt="Nelo Pharmacy Logo"
              />
            </a>
          </div>

          <ul className="nav-menu">
            <li className="nav-item"><a href="/" className="nav-link active">Home</a></li>
            <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="/services" className="nav-link">Services</a></li>
            <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
          </ul>

          <div className="nav-toggle">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Nelo Pharmacy</h1>
          <p>Your trusted healthcare partner for quality medications and professional health services</p>
          <a href="/contact" className="cta-button">Get In Touch</a>
        </div>
      </section>

      {/* Services */}
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>

          <div className="services-grid">

            <div className="service-card">
              <div className="service-icon">
                <Image src="/icons/pill.png" width={50} height={50} alt="Pill Icon" />
              </div>
              <h3>Prescription Medications</h3>
              <p>Expert dispensing of prescription medications with consultation.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Image src="/icons/stethoscope.png" width={50} height={50} alt="Stethoscope Icon" />
              </div>
              <h3>Health Consultations</h3>
              <p>Professional advice and consultations from qualified pharmacists.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Image src="/icons/syringe.png" width={50} height={50} alt="Syringe Icon" />
              </div>
              <h3>Vaccinations</h3>
              <p>Safe and reliable vaccination services for your family.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
