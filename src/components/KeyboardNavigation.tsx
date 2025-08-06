import React, { useEffect } from 'react';
import './KeyboardNavigation.css';

const KeyboardNavigation: React.FC = () => {
  useEffect(() => {
    // Adiciona um ouvinte de evento para teclas de atalho
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + 1: Ir para o topo da página
      if (event.altKey && event.key === '1') {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      
      // Alt + 2: Ir para a seção principal (main-content)
      if (event.altKey && event.key === '2') {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.classList.add('smooth-scroll');
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
          // Remove a classe após a rolagem
          setTimeout(() => mainContent.classList.remove('smooth-scroll'), 1000);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="keyboard-navigation" aria-hidden="true">
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <a href="#footer" className="skip-link">
        Pular para o rodapé
      </a>
    </div>
  );
};

export default KeyboardNavigation;