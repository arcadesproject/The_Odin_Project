import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../components/App';

afterEach(cleanup);

describe('App component tests', () => {
  test('renders initially', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  test('Renders heading correctly', () => {
    render(<App />);
    const heading = screen.getByRole('heading');
    expect(heading.textContent).toMatch(/twitter clone odin/i);
  });
});
