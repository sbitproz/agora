import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
jest.mock('components/Launches');

test('renders learn react link', () => {
  render(<App />);
  const mockLaunchesComponent = screen.getByText(/Mock Launches/i);
  expect(mockLaunchesComponent).toBeInTheDocument();
});
