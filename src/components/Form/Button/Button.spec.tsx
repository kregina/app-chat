import { render, fireEvent } from '@testing-library/react';

import { Button } from './Button';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('renders button with children and click event', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <Button isEnabled={true} onClick={handleClick} id="test">
        Click Me
      </Button>
    );

    const buttonElement = getByTestId('button-test');

    expect(buttonElement.textContent).toBe('Click Me');

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalled();
  });

  it('renders disabled button when isEnabled is false', () => {
    const { getByTestId } = render(
      <Button isEnabled={false} onClick={() => {}} id="test">
        Click Me
      </Button>
    );

    const buttonElement = getByTestId('button-test');

    expect(buttonElement).toBeDisabled();
  });
});
