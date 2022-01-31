import { render, screen } from "@testing-library/react";
import Records from "./Records";

describe('The Records component', () => {
  it('should display disabled form fields when there is no selected artist', () => {
    // arrange
    const selectedArtist = undefined;

    // act
    render(<Records selectedArtist={selectedArtist} />);

    // eslint-disable-next-line testing-library/no-debugging-utils
    // screen.debug();

    // assert
    const titleInput = screen.getByPlaceholderText('album title');
    const yearInput = screen.getByPlaceholderText('year');
    const saveBtn = screen.getByText('Save');
    expect(titleInput).toBeDisabled();
    expect(yearInput).toBeDisabled();
    expect(saveBtn).toBeDisabled();
  });

  it('should display enabled form fields when selected artist is defined', () => {
    // arrange
    const selectedArtist = true; // any truthy value will do

    // act
    render(<Records selectedArtist={selectedArtist} />)

    // assert
    const titleInput = screen.getByPlaceholderText('album title');
    const yearInput = screen.getByPlaceholderText('year');
    const saveBtn = screen.getByText('Save');
    expect(titleInput).not.toBeDisabled();
    expect(yearInput).not.toBeDisabled();
    expect(saveBtn).not.toBeDisabled();
  });

  it('should display a new record title after it is successfully saved', () => {

  });
});