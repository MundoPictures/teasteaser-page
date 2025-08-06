import KeyboardNavigation from './components/KeyboardNavigation';
import HeaderSection from './HeaderSection';
import './HeaderSection.css';
import HistorySection from './HistorySection';
import './HistorySection.css';
import CompaniesSection from './CompaniesSection';
import './CompaniesSection.css';
import TeaserSection from './TeaserSection';
import './TeaserSection.css';
import StudentAreaSection from './StudentAreaSection';
import './StudentAreaSection.css';
import TestimonialsSection from './TestimonialsSection';
import './TestimonialsSection.css';
import VideoGallerySection from './VideoGallerySection';
import './VideoGallerySection.css';
import FinalCTASection from './FinalCTASection';
import './FinalCTASection.css';
import FooterSection from './FooterSection';
import './FooterSection.new.css';
import './App.css';
import './components/KeyboardNavigation.css';

function App() {
  return (
    <div className="app-container">
      <KeyboardNavigation />
      
      <div className="content-wrapper">
        <HeaderSection />
        <main id="main-content" tabIndex={-1}>
          <HistorySection />
          <CompaniesSection />
          <TeaserSection />
          <StudentAreaSection />
          <TestimonialsSection />
          <VideoGallerySection />
          <FinalCTASection />
        </main>
      </div>
      
      <FooterSection id="footer" />
    </div>
  );
}

export default App;