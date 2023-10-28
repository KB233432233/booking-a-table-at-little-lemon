import './App.css';
import TestimonialsSection from './components/TestimonialsSection';
import HomePage from './components/HomePage';
import HomePageLayout from './components/HomePageLayout'
import BookingPage from './components/BookingPage';
import AboutSection from './components/AboutSection';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<HomePageLayout />} >
            <Route index element={<HomePage />} />
            <Route path='/BookingPage' element={<BookingPage />} />
            <Route path='/Testimonials' element={<TestimonialsSection />} />
            <Route path='/About' element={<AboutSection />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
