import { render, fireEvent } from '@testing-library/react';

import { Search } from './Search';
import '@testing-library/jest-dom';

describe('Search', () => {
  it('renders search container with input element', () => {
    const { getByPlaceholderText } = render(
      <Search searchTerm="" setSearchTerm={() => {}} />
    );

    const inputElement = getByPlaceholderText('Search an user...');
    expect(inputElement).toBeInTheDocument();
  });

  it('calls setSearchTerm function when input value changes', () => {
    const setSearchTermMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Search searchTerm="" setSearchTerm={setSearchTermMock} />
    );

    const inputElement = getByPlaceholderText('Search an user...');

    fireEvent.change(inputElement, { target: { value: 'John' } });
    expect(setSearchTermMock).toHaveBeenCalledWith('John');
  });

  it('displays the correct value in the input element', () => {
    const { getByPlaceholderText } = render(
      <Search searchTerm="Jane" setSearchTerm={() => {}} />
    );

    const inputElement = getByPlaceholderText('Search an user...');
    expect(inputElement).toHaveValue('Jane');
  });
});
