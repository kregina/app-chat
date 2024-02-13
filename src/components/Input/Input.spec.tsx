import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Input } from './Input';

describe('Input', () => {
  it('renders input with correct placeholder and value', () => {
    const placeholderText = 'Enter your name';
    const value = 'John Doe';

    const { getByPlaceholderText } = render(
      <Input
        value={value}
        onValueChange={() => {}}
        placeholder={placeholderText}
        id="name"
      />
    );

    const inputElement = getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(value);
  });

  it('calls onValueChange function when input value changes', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input
        value=""
        onValueChange={handleChange}
        placeholder="Enter your name"
        id="name"
      />
    );

    const inputElement = getByPlaceholderText('Enter your name');
    fireEvent.change(inputElement, { target: { value: 'John' } });
    expect(handleChange).toHaveBeenCalledWith('John');
  });

  it('renders message when provided', () => {
    const message = 'Please enter your name';
    const { getByText } = render(
      <Input
        value=""
        onValueChange={() => {}}
        placeholder="Enter your name"
        id="name"
        withValidation
        message={message}
      />
    );

    const messageElement = getByText(message);
    expect(messageElement).toBeInTheDocument();
  });
});
