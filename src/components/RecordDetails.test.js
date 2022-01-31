import { render, screen } from '@testing-library/react';
import Chance from 'chance';
import RecordDetails from './RecordDetails';

let chance;
describe('the record details component', () => {
  beforeAll(() => {
    chance = new Chance();
  });
  it('should render the record from props', () => {
    // arrange
    const record = {
      id: chance.guid(),
      title: chance.string(),
      year: chance.integer()
    };

    // act
    render(<RecordDetails record={record} />);

    // assert
    const titleElement = screen.getByText(record.title);
    const yearElement = screen.getByText(record.year);
    expect(titleElement).toBeInTheDocument();
    expect(yearElement).toBeInTheDocument();
  });

  it('should render a message when the record prop is falsy', () => {
    // arrange
    const record = undefined;

    // act
    render(<RecordDetails record={record} />);

    // assert
    const errorElement = screen.getByText(/pick a record/);
    expect(errorElement).toBeInTheDocument();
  });
});