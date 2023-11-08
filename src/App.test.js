import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingPageForm from './components/BookingPageForm';

test('render some text in booking form', () => {
  render(<BookingPageForm />);
  const date = screen.getByLabelText('Choose date');
  expect(date).toBeInTheDocument();

});
