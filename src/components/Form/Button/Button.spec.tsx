import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from './Button';

describe('Button', () => {
  it('renders button with correct text and icon', () => {
    const { getByText, getByTestId } = render(
      <Button isEnabled={true} onClick={() => {}} />
    );

    const buttonText = getByText('Enter');
    expect(buttonText).toBeInTheDocument();

    const buttonIcon = getByTestId('button-icon');
    expect(buttonIcon).toBeInTheDocument();
  });

  it('renders button as enabled when isEnabled is true', () => {
    const { getByTestId } = render(
      <Button isEnabled={true} onClick={() => {}} />
    );

    const button = getByTestId('button-login') as HTMLButtonElement;
    expect(button.disabled).toBe(false);
  });

  it('renders button as disabled when isEnabled is false', () => {
    const { getByTestId } = render(
      <Button isEnabled={false} onClick={() => {}} />
    );

    const button = getByTestId('button-login') as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });

  it('calls onClick function when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Button isEnabled={true} onClick={handleClick} />
    );

    const button = getByTestId('button-login');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
