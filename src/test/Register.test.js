import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Register from '../pages/Register';

describe('Register', () => {
  it('should be a function', () => {
    expect(typeof Register).toBe('function');
  });
  it('handleSubmit called on click', () => {
    const handleSubmit = jest.fn();
    render(
      <button onClick={handleSubmit} text='ENVIAR'>
      </button>
    );
    userEvent.click(screen.getByRole('button'));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});