import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import Login from '../pages/Login';

describe('Login', () => {
  it('should be a function', () => {
    expect(typeof Login).toBe('function');
  });
  it('should render the button component', () => {
    const text = 'Entrar'
    const onClick = jest.fn();
    render(
      <button onClick={onClick}>{text}
      </button>
    );
    userEvent.click(screen.getByText(text));
    expect(onClick).toBeCalledTimes(1);
  });
});


