//prettier-ignore
import { Home, About, Footer,  Skills, Testimonial, Work, NotFound } from './container/index';
import { Navigation } from './components/index';
import './App.scss';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="skills" element={<Skills />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
