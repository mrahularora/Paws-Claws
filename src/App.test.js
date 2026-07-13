import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app navigation', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /pawsclaws/i })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /shop/i }).length).toBeGreaterThan(0);
});
