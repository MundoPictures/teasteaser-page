import React from "react";
import { FiAward, FiBriefcase, FiCode, FiUsers, FiBookOpen } from "react-icons/fi";
import './HistorySection.css';

const HistorySection: React.FC = () => {
  return (
    <section id="minha-historia" className="history-section" aria-label="Minha História">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Minha Jornada</span>
          <h2 className="section-title">De professor a especialista em marketing digital</h2>
          <p className="section-subtitle">
            Minha trajetória é marcada por desafios, superação e muito aprendizado. 
            Conheça um pouco da minha história e como posso te ajudar a transformar sua carreira.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-icon">
                <FiBookOpen className="icon" />
              </div>
              <div className="timeline-details">
                <h3>2005 - Início na Educação</h3>
                <p>
                  Comecei minha carreira como professor de informática, ensinando pessoas de todas as idades a usarem o computador e a internet.
                </p>
              </div>
              <div className="timeline-year">2005</div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-icon">
                <FiCode className="icon" />
              </div>
              <div className="timeline-details">
                <h3>2010 - Primeiros Passos no Digital</h3>
                <p>
                  Desenvolvi meu primeiro site e me apaixonei pelo mundo digital. Comecei a estudar programação e design por conta própria.
                </p>
              </div>
              <div className="timeline-year">2010</div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-icon">
                <FiBriefcase className="icon" />
              </div>
              <div className="timeline-details">
                <h3>2015 - Primeira Agência</h3>
                <p>
                  Fundei minha primeira agência de marketing digital, ajudando pequenos negócios a se destacarem online.
                </p>
              </div>
              <div className="timeline-year">2015</div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-icon">
                <FiUsers className="icon" />
              </div>
              <div className="timeline-details">
                <h3>2018 - Primeiro Curso Online</h3>
                <p>
                  Lancei meu primeiro curso online, ensinando marketing digital para iniciantes. Mais de 1.000 alunos impactados.
                </p>
              </div>
              <div className="timeline-year">2018</div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-icon">
                <FiAward className="icon" />
              </div>
              <div className="timeline-details">
                <h3>2023 - Reconhecimento</h3>
                <p>
                  Fui reconhecido como um dos profissionais mais influentes do marketing digital no Brasil, com mais de 100 empresas atendidas.
                </p>
              </div>
              <div className="timeline-year">2023</div>
            </div>
          </div>
        </div>
        
        <div className="cta-container">
          <a href="#acesso-gratuito" className="button button--primary">
            Quero fazer parte dessa jornada
          </a>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;