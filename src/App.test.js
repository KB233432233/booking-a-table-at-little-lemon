import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingPageForm from './components/BookingPageForm';
import { click } from '@testing-library/user-event/dist/click';

test('testing validation', () => {
  render(<BookingPageForm />);
  const btn = screen.getByDisplayValue('Make Your reservation');
  btn.fireEvent('click');
  const val = screen.getByDisplayValue('required')
  expect(val).toBeInTheDocument();
});
