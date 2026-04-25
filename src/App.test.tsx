import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

test('toggles theme when button is clicked', () => {
  window.localStorage.removeItem('theme');

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const toggleButton = screen.getByRole('button', { name: /toggle dark mode/i });

  expect(toggleButton).toBeInTheDocument();
  expect(toggleButton).toHaveTextContent(/switch to dark mode|switch to light mode/i);

  const initialLabel = toggleButton.textContent;
  fireEvent.click(toggleButton);

  expect(toggleButton.textContent).not.toBe(initialLabel);
  expect(document.body.getAttribute('data-theme')).toMatch(/light|dark/);
});
