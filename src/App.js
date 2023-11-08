import './App.css';
import TestimonialsSection from './components/TestimonialsSection';
import HomePage from './components/HomePage';
import HomePageLayout from './components/HomePageLayout'
import BookingPage from './components/BookingPage';
import AboutSection from './components/AboutSection';
import Confirmed from './components/Confirmed'
  ; import { Route, Routes, useNavigate } from 'react-router-dom';
import { useReducer } from 'react';

function App() {

  const fetchAPI = () => {
    let result = [];
    for (let i = 17; i <= 22; i++) {
      let random = Math.random();
      if (random < 0.5)
        result.push(`${i}:00`);
      else result.push(`${i}:30`);
    }
    return result;
  }

  const initialState = { availableTimes: fetchAPI() };

  const updateTimes = (state, { state2, act }) => {

    if (act == 'date') return { availableTimes: fetchAPI() };

    return { ...state, state2 };
  }

  const [state, dispatch] = useReducer(updateTimes, initialState);

  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<HomePageLayout />} >
            <Route index element={<HomePage />} />
            <Route path='BookingPage' element={<BookingPage times={state.availableTimes} dispatch={dispatch} />} />
            <Route path='Confirmed' element={<Confirmed />} />
            <Route path='Testimonials' element={<TestimonialsSection />} />
            <Route path='About' element={<AboutSection />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
