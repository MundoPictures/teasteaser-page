import React, { useState } from 'react';
import { FiCheck, FiLock, FiPlay, FiClock, FiAward, FiUsers, FiBookOpen } from 'react-icons/fi';
import './StudentAreaSection.css';

const StudentAreaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cursos' | 'materiais' | 'comunidade'>('cursos');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const courses = [
    {
      id: 1,
      title: 'Marketing Digital para Iniciantes',
      description: 'Aprenda os fundamentos do marketing digital do zero e comece a aplicar hoje mesmo.',
      image: 'https://via.placeholder.com/400x225?text=Marketing+Digital',
      progress: 65,
      modules: 8,
      lessons: 32,
      duration: '12 horas'
    },
    {
      id: 2,
      title: 'Tráfego Pago no Instagram',
      description: 'Domine as estratégias de anúncios no Instagram e aumente suas vendas.',
      image: 'https://via.placeholder.com/400x225?text=Instagram+Ads',
      progress: 30,
      modules: 6,
      lessons: 24,
      duration: '10 horas',
      isLocked: true
    },
    {
      id: 3,
      title: 'Copywriting para Vendas',
      description: 'Aprenda a escrever textos persuasivos que convertem leitores em clientes.',
      image: 'https://via.placeholder.com/400x225?text=Copywriting',
      progress: 0,
      modules: 5,
      lessons: 20,
      duration: '8 horas',
      isLocked: true
    }
  ];

  const materials = [
    {
      id: 1,
      title: 'Planilha de Análise de Concorrência',
      type: 'planilha',
      format: 'XLSX',
      size: '2.4 MB',
      downloads: 1243
    },
    {
      id: 2,
      title: 'Guia de SEO 2023',
      type: 'pdf',
      format: 'PDF',
      size: '5.1 MB',
      downloads: 987
    },
    {
      id: 3,
      title: 'Modelos de Anúncios para Facebook',
      type: 'arquivo',
      format: 'ZIP',
      size: '12.7 MB',
      downloads: 765,
      isLocked: true
    }
  ];

  const communityPosts = [
    {
      id: 1,
      user: 'Ana Silva',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      content: 'Alguém já usou a nova ferramenta de análise do Google? Estou com dificuldades para entender os relatórios.',
      time: '2 horas atrás',
      likes: 8,
      comments: 3
    },
    {
      id: 2,
      user: 'Carlos Mendes',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: 'Compartilhando meu case de sucesso: aumentei minhas vendas em 200% aplicando as estratégias do curso de tráfego pago!',
      time: '1 dia atrás',
      likes: 24,
      comments: 7
    },
    {
      id: 3,
      user: 'Juliana Costa',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      content: 'Alguém recomenda alguma ferramenta para gerenciar redes sociais? Preciso de algo intuitivo e acessível.',
      time: '3 dias atrás',
      likes: 5,
      comments: 9
    }
  ];

  const openCourseModal = (courseId: number) => {
    setSelectedCourse(courseId);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
    document.body.style.overflow = 'auto';
  };

  const selectedCourseData = courses.find(course => course.id === selectedCourse);

  return (
    <section id="area-do-aluno" className="student-area-section" aria-label="Área do Aluno">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Área do Aluno</span>
          <h2 className="section-title">Sua jornada de aprendizado</h2>
          <p className="section-subtitle">
            Acesse seus cursos, materiais exclusivos e faça parte da nossa comunidade de alunos.
          </p>
        </div>

        <div className="tabs-container">
          <div className="tabs-header">
            <button 
              className={`tab-button ${activeTab === 'cursos' ? 'active' : ''}`}
              onClick={() => setActiveTab('cursos')}
              aria-selected={activeTab === 'cursos'}
              aria-controls="cursos-panel"
              id="cursos-tab"
            >
              <FiBookOpen className="tab-icon" />
              Meus Cursos
            </button>
            
            <button 
              className={`tab-button ${activeTab === 'materiais' ? 'active' : ''}`}
              onClick={() => setActiveTab('materiais')}
              aria-selected={activeTab === 'materiais'}
              aria-controls="materiais-panel"
              id="materiais-tab"
            >
              <FiAward className="tab-icon" />
              Materiais
            </button>
            
            <button 
              className={`tab-button ${activeTab === 'comunidade' ? 'active' : ''}`}
              onClick={() => setActiveTab('comunidade')}
              aria-selected={activeTab === 'comunidade'}
              aria-controls="comunidade-panel"
              id="comunidade-tab"
            >
              <FiUsers className="tab-icon" />
              Comunidade
            </button>
          </div>

          <div className="tabs-content">
            {/* Painel de Cursos */}
            <div 
              id="cursos-panel" 
              role="tabpanel" 
              aria-labelledby="cursos-tab"
              className={`tab-panel ${activeTab === 'cursos' ? 'active' : ''}`}
            >
              <div className="courses-grid">
                {courses.map((course) => (
                  <div 
                    key={course.id} 
                    className={`course-card ${course.isLocked ? 'locked' : ''}`}
                    onClick={() => !course.isLocked && openCourseModal(course.id)}
                  >
                    <div className="course-image">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        width="400"
                        height="225"
                        loading="lazy"
                      />
                      {course.isLocked && (
                        <div className="course-lock">
                          <FiLock size={24} />
                          <span>Conclua o curso anterior para desbloquear</span>
                        </div>
                      )}
                      {course.progress > 0 && (
                        <div className="course-progress">
                          <div 
                            className="progress-bar" 
                            style={{ width: `${course.progress}%` }}
                            aria-valuenow={course.progress}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                          <span className="progress-text">{course.progress}% concluído</span>
                        </div>
                      )}
                    </div>
                    <div className="course-details">
                      <h3 className="course-title">{course.title}</h3>
                      <p className="course-description">{course.description}</p>
                      <div className="course-meta">
                        <span className="meta-item">
                          <FiBookOpen className="meta-icon" />
                          {course.modules} Módulos
                        </span>
                        <span className="meta-item">
                          <FiPlay className="meta-icon" />
                          {course.lessons} Aulas
                        </span>
                        <span className="meta-item">
                          <FiClock className="meta-icon" />
                          {course.duration}
                        </span>
                      </div>
                      {!course.isLocked && (
                        <button 
                          className="button button--primary button--sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            openCourseModal(course.id);
                          }}
                        >
                          {course.progress > 0 ? 'Continuar' : 'Começar agora'}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Painel de Materiais */}
            <div 
              id="materiais-panel" 
              role="tabpanel" 
              aria-labelledby="materiais-tab"
              className={`tab-panel ${activeTab === 'materiais' ? 'active' : ''}`}
              hidden={activeTab !== 'materiais'}
            >
              <div className="materials-list">
                {materials.map((material) => (
                  <div key={material.id} className={`material-item ${material.isLocked ? 'locked' : ''}`}>
                    <div className="material-icon">
                      {material.type === 'pdf' ? (
                        <span className="file-type pdf">PDF</span>
                      ) : material.type === 'planilha' ? (
                        <span className="file-type xlsx">XLSX</span>
                      ) : (
                        <span className="file-type zip">ZIP</span>
                      )}
                    </div>
                    <div className="material-details">
                      <h3 className="material-title">{material.title}</h3>
                      <div className="material-meta">
                        <span className="meta-item">{material.format}</span>
                        <span className="meta-divider">•</span>
                        <span className="meta-item">{material.size}</span>
                        <span className="meta-divider">•</span>
                        <span className="meta-item">{material.downloads.toLocaleString()} downloads</span>
                      </div>
                    </div>
                    <button 
                      className="button button--outline button--sm download-button"
                      disabled={material.isLocked}
                    >
                      {material.isLocked ? <FiLock size={16} /> : 'Baixar'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Painel de Comunidade */}
            <div 
              id="comunidade-panel" 
              role="tabpanel" 
              aria-labelledby="comunidade-tab"
              className={`tab-panel ${activeTab === 'comunidade' ? 'active' : ''}`}
              hidden={activeTab !== 'comunidade'}
            >
              <div className="community-container">
                <div className="new-post">
                  <div className="post-avatar">
                    <img 
                      src="https://ui-avatars.com/api/?name=Você&background=8B5CF6&color=fff" 
                      alt="Seu perfil" 
                      width="40"
                      height="40"
                    />
                  </div>
                  <div className="post-input">
                    <input 
                      type="text" 
                      placeholder="Compartilhe sua dúvida ou conquista com a comunidade..." 
                      className="post-textarea"
                    />
                  </div>
                  <button className="button button--primary">Publicar</button>
                </div>

                <div className="community-posts">
                  {communityPosts.map((post) => (
                    <div key={post.id} className="post-card">
                      <div className="post-header">
                        <img 
                          src={post.avatar} 
                          alt={post.user} 
                          className="post-avatar"
                          width="40"
                          height="40"
                          loading="lazy"
                        />
                        <div className="post-user">
                          <h4 className="post-username">{post.user}</h4>
                          <span className="post-time">{post.time}</span>
                        </div>
                      </div>
                      <div className="post-content">
                        <p>{post.content}</p>
                      </div>
                      <div className="post-actions">
                        <button className="action-button">
                          <FiThumbsUp className="action-icon" />
                          <span>Gostei ({post.likes})</span>
                        </button>
                        <button className="action-button">
                          <FiMessageSquare className="action-icon" />
                          <span>Comentar ({post.comments})</span>
                        </button>
                        <button className="action-button">
                          <FiShare2 className="action-icon" />
                          <span>Compartilhar</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Curso */}
      {isModalOpen && selectedCourseData && (
        <div className="course-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal} aria-label="Fechar modal">
              &times;
            </button>
            
            <div className="modal-header">
              <h2 className="modal-title">{selectedCourseData.title}</h2>
              <p className="modal-subtitle">{selectedCourseData.description}</p>
              
              <div className="course-progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${selectedCourseData.progress}%` }}
                  aria-valuenow={selectedCourseData.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
                <span className="progress-text">{selectedCourseData.progress}% concluído</span>
              </div>
              
              <div className="course-stats">
                <div className="stat-item">
                  <FiBookOpen className="stat-icon" />
                  <div>
                    <div className="stat-value">{selectedCourseData.modules}</div>
                    <div className="stat-label">Módulos</div>
                  </div>
                </div>
                <div className="stat-item">
                  <FiPlay className="stat-icon" />
                  <div>
                    <div className="stat-value">{selectedCourseData.lessons}</div>
                    <div className="stat-label">Aulas</div>
                  </div>
                </div>
                <div className="stat-item">
                  <FiClock className="stat-icon" />
                  <div>
                    <div className="stat-value">{selectedCourseData.duration}</div>
                    <div className="stat-label">Duração</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="modal-body">
              <div className="course-modules">
                <h3>Conteúdo do Curso</h3>
                
                <div className="module">
                  <div className="module-header">
                    <h4>Módulo 1: Introdução ao Marketing Digital</h4>
                    <span className="module-lessons">4 aulas</span>
                  </div>
                  <div className="lessons-list">
                    {[1, 2, 3, 4].map((lesson) => (
                      <div key={lesson} className="lesson-item">
                        <div className="lesson-checkbox">
                          {lesson <= 2 ? (
                            <FiCheck className="check-icon" />
                          ) : (
                            <div className="empty-check"></div>
                          )}
                        </div>
                        <div className="lesson-details">
                          <h5 className="lesson-title">Aula {lesson}: Título da Aula</h5>
                          <div className="lesson-meta">
                            <span className="lesson-duration">15 min</span>
                            {lesson <= 2 && <span className="lesson-completed">Concluído</span>}
                          </div>
                        </div>
                        {lesson > 2 && (
                          <button className="lesson-play">
                            <FiPlay size={16} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="module">
                  <div className="module-header">
                    <h4>Módulo 2: Estratégias Avançadas</h4>
                    <span className="module-lessons">4 aulas</span>
                  </div>
                  <div className="module-locked">
                    <FiLock size={24} />
                    <p>Conclua o módulo anterior para desbloquear</p>
                  </div>
                </div>
              </div>
              
              <div className="course-resources">
                <h3>Materiais do Curso</h3>
                <div className="resources-list">
                  {materials.slice(0, 2).map((material) => (
                    <div key={material.id} className="resource-item">
                      <div className="resource-icon">
                        {material.type === 'pdf' ? (
                          <span className="file-type pdf">PDF</span>
                        ) : material.type === 'planilha' ? (
                          <span className="file-type xlsx">XLSX</span>
                        ) : (
                          <span className="file-type zip">ZIP</span>
                        )}
                      </div>
                      <div className="resource-details">
                        <h4>{material.title}</h4>
                        <div className="resource-meta">
                          <span>{material.format}</span>
                          <span>•</span>
                          <span>{material.size}</span>
                        </div>
                      </div>
                      <button className="button button--outline button--sm">
                        Baixar
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <button className="button button--secondary">
                Anterior
              </button>
              <button className="button button--primary">
                Próxima Aula
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default StudentAreaSection;