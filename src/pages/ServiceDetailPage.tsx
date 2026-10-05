import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { Phone, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();

  const service = serviceSlug ? servicesData[serviceSlug] : null;

  useEffect(() => {
    if (service) {
      document.title = service.metaTitle;
      const metaDescriptionTag = document.querySelector('meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.setAttribute('content', service.metaDescription);
      }
      window.scrollTo(0, 0);
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/#services" replace />;
  }

  return (
    <div className="service-detail-page">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <Link to="/#services">Services</Link>
          <ChevronRight size={14} />
          <span aria-current="page">{service.title}</span>
        </div>
      </nav>

      {/* Service Page Hero */}
      <section className="service-detail-hero">
        <div className="hero-content">
          <span className="hero-badge">Professional Landscaping Service</span>
          <h1>{service.title}</h1>
          <p className="hero-subtitle">{service.heroSubtitle}</p>
          <p className="hero-desc">{service.shortDesc}</p>

          <div className="hero-cta-buttons">
            <a href="tel:+12533585125" className="submit-button call-btn">
              <Phone size={18} />
              <span>Call (253) 358-5125</span>
            </a>
            <Link to="/#contact" className="submit-button estimate-btn">
              <Calendar size={18} />
              <span>Request Free Estimate</span>
            </Link>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src={service.image}
            alt={`${service.title} project in Gig Harbor and Tacoma by LZM Landscaping LLC`}
            className="service-hero-img"
          />
        </div>
      </section>

      {/* What's Included Section */}
      <section className="service-features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Comprehensive Workmanship</span>
            <h2>What’s Included in Our {service.title}</h2>
            <p>Every project is supervised personally by owner Luis Zacarias to guarantee top-tier results that last.</p>
          </div>

          <div className="features-grid">
            {service.features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <CheckCircle2 className="feature-icon" size={24} />
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetailPage;
