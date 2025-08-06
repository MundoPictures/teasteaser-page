import React, { useState } from 'react';
import { FiPlay, FiCheck, FiClock, FiUsers, FiAward, FiBookOpen } from 'react-icons/fi';
import './TeaserSection.css';

const TeaserSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'o-que-e' | 'para-quem' | 'como-funciona'>('o-que-e');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="teaser" className="teaser-section" aria-label="Teaser da Plataforma">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Plataforma Gratuita</span>
          <h2 className="section-title">Conheça o Universo Tiago Fonseca</h2>
          <p className="section-subtitle">
            Uma plataforma completa com cursos, materiais e ferramentas para você se destacar no mercado digital.
          </p>
        </div>

        <div className="teaser-tabs">
          <button 
            className={`tab-button ${activeTab === 'o-que-e' ? 'active' : ''}`}
            onClick={() => setActiveTab('o-que-e')}
            aria-selected={activeTab === 'o-que-e'}
            aria-controls="o-que-e-panel"
            id="o-que-e-tab"
          >
            <FiBookOpen className="tab-icon" />
            O que é
          </button>
          
          <button 
            className={`tab-button ${activeTab === 'para-quem' ? 'active' : ''}`}
            onClick={() => setActiveTab('para-quem')}
            aria-selected={activeTab === 'para-quem'}
            aria-controls="para-quem-panel"
            id="para-quem-tab"
          >
            <FiUsers className="tab-icon" />
            Para quem é
          </button>
          
          <button 
            className={`tab-button ${activeTab === 'como-funciona' ? 'active' : ''}`}
            onClick={() => setActiveTab('como-funciona')}
            aria-selected={activeTab === 'como-funciona'}
            aria-controls="como-funciona-panel"
            id="como-funciona-tab"
          >
            <FiAward className="tab-icon" />
            Como funciona
          </button>
        </div>

        <div className="teaser-content">
          <div className="teaser-video" onClick={openModal}>
            <div className="video-thumbnail">
              <img 
                src="https://tiagofonseca.com.br/wp-content/uploads/2023/03/plataforma-tiago-fonseca-thumb.jpg" 
                alt="Vídeo de apresentação da plataforma"
                width="800"
                height="450"
                loading="lazy"
                className="video-thumb"
              />
              <div className="play-button">
                <FiPlay className="play-icon" />
              </div>
            </div>
            <p className="video-caption">Assista ao vídeo e conheça a plataforma</p>
          </div>

          <div className="teaser-details">
            <div 
              id="o-que-e-panel" 
              role="tabpanel" 
              aria-labelledby="o-que-e-tab"
              className={`tab-panel ${activeTab === 'o-que-e' ? 'active' : ''}`}
            >
              <h3>O que você vai encontrar na plataforma</h3>
              <ul className="feature-list">
                <li className="feature-item">
                  <FiCheck className="feature-icon" />
                  <div>
                    <h4>Cursos completos</h4>
                    <p>De iniciante ao avançado em marketing digital, redes sociais e vendas online.</p>
                  </div>
                </li>
                <li className="feature-item">
                  <FiCheck className="feature-icon" />
                  <div>
                    <h4>Materiais exclusivos</h4>
                    <p>Planilhas, templates e materiais de apoio para colocar em prática.</p>
                  </div>
                </li>
                <li className="feature-item">
                  <FiCheck className="feature-icon" />
                  <div>
                    <h4>Comunidade ativa</h4>
                    <p>Conecte-se com outros alunos e profissionais da área.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div 
              id="para-quem-panel" 
              role="tabpanel" 
              aria-labelledby="para-quem-tab"
              className={`tab-panel ${activeTab === 'para-quem' ? 'active' : ''}`}
              hidden={activeTab !== 'para-quem'}
            >
              <h3>Para quem é essa plataforma</h3>
              <ul className="feature-list">
                <li className="feature-item">
                  <FiUsers className="feature-icon" />
                  <div>
                    <h4>Iniciantes</h4>
                    <p>Que desejam começar no marketing digital do zero.</p>
                  </div>
                </li>
                <li className="feature-item">
                  <FiUsers className="feature-icon" />
                  <div>
                    <h4>Empreendedores</h4>
                    <p>Que querem alavancar seus negócios online.</p>
                  </div>
                </li>
                <li className="feature-item">
                  <FiUsers className="feature-icon" />
                  <div>
                    <h4>Profissionais</h4>
                    <p>Buscando se atualizar e se destacar no mercado.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div 
              id="como-funciona-panel" 
              role="tabpanel" 
              aria-labelledby="como-funciona-tab"
              className={`tab-panel ${activeTab === 'como-funciona' ? 'active' : ''}`}
              hidden={activeTab !== 'como-funciona'}
            >
              <h3>Como funciona</h3>
              <ol className="steps-list">
                <li className="step-item">
                  <div className="step-number">1</div>
                  <div>
                    <h4>Cadastre-se gratuitamente</h4>
                    <p>Crie sua conta em poucos segundos.</p>
                  </div>
                </li>
                <li className="step-item">
                  <div className="step-number">2</div>
                  <div>
                    <h4>Escolha seu caminho</h4>
                    <p>Selecione os cursos e materiais de acordo com seu objetivo.</p>
                  </div>
                </li>
                <li className="step-item">
                  <div className="step-number">3</div>
                  <div>
                    <h4>Comece a aprender</h4>
                    <p>Acesse as aulas e materiais quando e onde quiser.</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="teaser-cta">
              <a href="#acesso-gratuito" className="button button--primary button--lg">
                Quero me cadastrar agora
              </a>
              <p className="small-text">
                <FiClock className="icon" />
                Leva menos de 1 minuto para se cadastrar
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Vídeo */}
      {isModalOpen && (
        <div className="video-modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal} aria-label="Fechar vídeo">
              &times;
            </button>
            <div className="video-container">
              <iframe
                width="800"
                height="450"
                src="https://www.youtube.com/embed/SEU_VIDEO_ID?autoplay=1"
                title="Apresentação da Plataforma Tiago Fonseca"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeaserSection;