import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './CompaniesSection.css';

const CompaniesSection: React.FC = () => {
  const companies = [
    { 
      id: 1, 
      name: 'Empresa 1',
      logo: 'https://via.placeholder.com/150x80?text=Empresa+1',
      alt: 'Logo da Empresa 1'
    },
    { 
      id: 2, 
      name: 'Empresa 2',
      logo: 'https://via.placeholder.com/150x80?text=Empresa+2',
      alt: 'Logo da Empresa 2'
    },
    { 
      id: 3, 
      name: 'Empresa 3',
      logo: 'https://via.placeholder.com/150x80?text=Empresa+3',
      alt: 'Logo da Empresa 3'
    },
    { 
      id: 4, 
      name: 'Empresa 4',
      logo: 'https://via.placeholder.com/150x80?text=Empresa+4',
      alt: 'Logo da Empresa 4'
    },
    { 
      id: 5, 
      name: 'Empresa 5',
      logo: 'https://via.placeholder.com/150x80?text=Empresa+5',
      alt: 'Logo da Empresa 5'
    },
  ];

  return (
    <section className="companies-section" aria-label="Empresas que confiam no meu trabalho">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Empresas que confiam no meu trabalho</h2>
          <p className="section-subtitle">
            Ajudei essas e outras empresas a alcançarem resultados incríveis com estratégias de marketing digital.
          </p>
        </div>

        <div className="companies-slider">
          <button 
            className="slider-arrow slider-arrow--prev" 
            aria-label="Anterior"
            onClick={() => {}}
          >
            <FiChevronLeft />
          </button>
          
          <div className="companies-track">
            {companies.map(company => (
              <div key={company.id} className="company-logo">
                <img 
                  src={company.logo} 
                  alt={company.alt}
                  width="150"
                  height="80"
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            
            {/* Duplicar os itens para criar o efeito de loop infinito */}
            {companies.map(company => (
              <div key={`duplicate-${company.id}`} className="company-logo">
                <img 
                  src={company.logo} 
                  alt={company.alt}
                  width="150"
                  height="80"
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          
          <button 
            className="slider-arrow slider-arrow--next" 
            aria-label="Próximo"
            onClick={() => {}}
          >
            <FiChevronRight />
          </button>
        </div>
        
        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="testimonial-quote">"</div>
            <blockquote>
              <p>O trabalho do Tiago foi fundamental para alavancar nossas vendas online. Sua abordagem estratégica e conhecimento técnico superaram nossas expectativas.</p>
              <footer>
                <cite>João Silva</cite>
                <span className="testimonial-role">Diretor de Marketing, Empresa X</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;