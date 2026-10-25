// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TokenCrossing title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TokenCrossing/i);
    expect(titleElement).toBeInTheDocument();
});
