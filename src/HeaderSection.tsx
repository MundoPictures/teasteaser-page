import React from "react";
import { FiArrowRight, FiAward, FiUsers, FiZap, FiClock, FiBarChart2 } from "react-icons/fi";
import { FaHandsHelping, FaGraduationCap } from "react-icons/fa";
import './HeaderSection.css';

const HeaderSection: React.FC = () => {
  return (
    <header className="header-section" role="banner" aria-label="Universo Tiago Fonseca">
      <div className="container">
        <div className="header-content">
          <div className="header-text">
            <div className="eyebrow">
              <span className="eyebrow-text">Bem-vindo ao Universo Tiago Fonseca</span>
              <span className="eyebrow-divider"></span>
            </div>
            
            <h1 className="main-title">
              <span className="sr-only">Tiago Fonseca - Especialista em Marketing Digital</span>
              <span className="title-line">Conhecimento que transforma</span>
              <span className="title-line highlight">vidas e negócios</span>
            </h1>
            
            <p className="subtitle">
              Acredito no poder da educação digital para criar oportunidades reais. Por isso, desenvolvi uma plataforma gratuita onde compartilho todo o meu conhecimento em marketing digital, desenvolvimento pessoal e empreendedorismo.
            </p>
            
            <div className="cta-group">
              <a 
                href="#acesso-gratuito" 
                className="button button--primary"
                aria-label="Acessar plataforma gratuita"
                role="button"
              >
                <FiZap className="button-icon" />
                Acessar plataforma grátis
                <FiArrowRight className="button-icon" />
              </a>
              
              <a 
                href="#minha-historia" 
                className="button button--outline"
                aria-label="Conhecer minha trajetória"
              >
                <FiClock className="button-icon" />
                Minha trajetória
              </a>
            </div>
            
            <div className="trust-badges">
              <div className="trust-item" aria-label="Mais de 10.000 pessoas impactadas">
                <FiUsers className="trust-icon" />
                <span>+10K</span> Pessoas impactadas
              </div>
              <div className="trust-item" aria-label="Mais de 1.000 alunos">
                <FaGraduationCap className="trust-icon" />
                <span>+1K</span> Alunos
              </div>
              <div className="trust-item" aria-label="Mais de 100 empresas atendidas">
                <FiBarChart2 className="trust-icon" />
                <span>+100</span> Empresas
              </div>
            </div>
          </div>
          
          <div className="header-media">
            <div className="image-container">
              <img 
                src="https://tiagofonseca.com.br/wp-content/uploads/2023/03/tiago-fonseca-palestrante.jpg" 
                alt="Tiago Fonseca em palestra" 
                className="header-image"
                width="500"
                height="600"
                loading="eager"
              />
              <div className="floating-card floating-card--1">
                <FiAward className="floating-card-icon" />
                <div className="floating-card-text">
                  <span>+15 anos</span>
                  <span>de experiência</span>
                </div>
              </div>
              <div className="floating-card floating-card--2">
                <FaHandsHelping className="floating-card-icon" />
                <div className="floating-card-text">
                  <span>+1000</span>
                  <span>alunos formados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator" aria-hidden="true">
        <span>Role para baixo</span>
        <div className="scroll-line"></div>
      </div>
    </header>
  );
};

export default HeaderSection;