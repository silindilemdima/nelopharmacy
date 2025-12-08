import Image from "next/image";
import "./services.css";

export default function Services() {
  return (
    <div>
      {/* Page Header */}
      <header className="page-header">
        <h1>Our Services</h1>
        <p>Quality Healthcare Services You Can Trust</p>
      </header>


      <main className="main-content">
        <section className="services-section">
          <div className="service">
            <Image src="/images/service1.jpg" alt="General Consultation" width={400} height={300} />
            <h2>General Consultation</h2>
            <p>Professional medical consultations for all age groups, ensuring your health is our priority.</p>
          </div>

          <div className="service">
            <Image src="/images/service2.jpg" alt="Pharmacy Services" width={400} height={300} />
            <h2>Pharmacy Services</h2>
            <p>Providing quality medicines and expert guidance on prescriptions and over-the-counter products.</p>
          </div>

          <div className="service">
            <Image src="/images/service3.jpg" alt="Vaccinations" width={400} height={300} />
            <h2>Vaccinations</h2>
            <p>Safe and effective immunizations for children and adults, keeping your community protected.</p>
          </div>

          <div className="service">
            <Image src="/images/service4.jpg" alt="Health Check-ups" width={400} height={300} />
            <h2>Health Check-ups</h2>
            <p>Comprehensive health assessments to detect potential issues early and maintain wellness.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
