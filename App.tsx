import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './index';
import Works from './Works';
import Contact from './Contact';
import { useNavigation } from './hooks/useNavigation';

function AppContent() {
  const handleNavigate = useNavigation();

  return (
    <Routes>
      <Route path="/" element={<Index onNavigate={handleNavigate} />} />
      <Route path="/works" element={<Works onNavigate={handleNavigate} />} />
      <Route path="/contact" element={<Contact onNavigate={handleNavigate} />} />
      <Route path="*" element={<Index onNavigate={handleNavigate} />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
