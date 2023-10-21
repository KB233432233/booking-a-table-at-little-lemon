import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SpecialsSection from './SpecialsSection';
import TestimonialsSection from './TestimonialsSection';
import Footer from './Footer';
import LandingSection from './LandingSection';

function App() {
  return (
    <>
      <Header />
      <main>
        <LandingSection />
        <SpecialsSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
