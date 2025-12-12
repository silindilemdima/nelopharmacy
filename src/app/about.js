import Image from "next/image";
import "./about.css";

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <header className="page-header">
        <h1>About Us</h1>
        <p>Your Trusted Healthcare Partner</p>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">

          {/* Company Description */}
          <section className="section">
            <h2 className="section-title">Who We Are</h2>
            <p>
              Nelo Pharmacy has been serving our community with dedication and care for years. 
              We are more than just a pharmacy – we are your trusted healthcare partners, 
              committed to providing exceptional pharmaceutical services and personalized care 
              to every patient who walks through our doors.
            </p>
            <p>
              Our team of experienced pharmacists and healthcare professionals work tirelessly 
              to ensure that you receive the highest quality medications, expert advice, and 
              compassionate service. We understand that your health is your most valuable asset, 
              and we treat it with the utmost respect and attention it deserves.
            </p>
            <p>
              At Nelo Pharmacy, we combine traditional values of care and compassion with 
              modern pharmaceutical expertise and technology, creating a healthcare experience 
              that is both professional and personal.
            </p>
          </section>

          {/* Mission Statement */}
          <section className="section">
            <div className="mission-statement">
              <h3>Our Mission</h3>
              <p>
                To provide accessible, high-quality pharmaceutical care and health services 
                that improve the well-being of our community. We are committed to excellence 
                in service, integrity in practice, and compassion in care, ensuring that 
                every individual receives personalized attention and expert guidance on their 
                journey to better health.
              </p>
            </div>
          </section>

          {/* Our Values */}
          <section className="section">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <Image src="/icons/heart.png" width={50} height={50} alt="Compassion Icon" />
                </div>
                <h3>Compassion</h3>
                <p>We approach every patient with empathy and understanding...</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <Image src="/icons/target.png" width={50} height={50} alt="Excellence Icon" />
                </div>
                <h3>Excellence</h3>
                <p>We maintain the highest standards in pharmaceutical care...</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <Image src="/icons/handshake.png" width={50} height={50} alt="Integrity Icon" />
                </div>
                <h3>Integrity</h3>
                <p>We conduct our business with honesty and transparency...</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <Image src="/icons/lightbulb.png" width={50} height={50} alt="Innovation Icon" />
                </div>
                <h3>Innovation</h3>
                <p>We embrace modern pharmaceutical technologies and practices...</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <Image src="/icons/globe.png" width={50} height={50} alt="Community Icon" />
                </div>
                <h3>Community</h3>
                <p>We are deeply committed to our community's health and well-being...</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <Image src="/icons/lock.png" width={50} height={50} alt="Reliability Icon" />
                </div>
                <h3>Reliability</h3>
                <p>You can count on us to be consistent, dependable, and always available...</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
