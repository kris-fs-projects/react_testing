import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { AppConnector } from "./AppConnector";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middleware = [thunk];
const mockStore = configureStore(middleware);

// see https://www.robinwieruch.de/react-connected-component-test/
describe('App Connector', () => {

  let store;
  let mockData = {
    artistsReducer: {
      artists: [
        {
          id: '1',
          name: 'The Tragically Hip'
        },
        {
          id: "2",
          name: "The Watchmen"
        },
      ],
      selectedArtist: {
        id: '1',
        name: 'The Tragically Hip'
      }
    },
    recordsReducer: {
      records: [
        {
          id: '1',
          title: 'Up To Here',
          artistId: '1',
          year: '1989'
        },
        {
          id: '2',
          title: 'Saskadelphia',
          artistId: '1',
          year: '2021'
        },
        {
          id: "3",
          title: "McLaren Furnace Room",
          artistId: "2",
          year: "1992"
        },
      ],
      filteredRecords: [
        {
          id: '1',
          title: 'Up To Here',
          artistId: '1',
          year: '1989'
        },
        {
          id: '2',
          title: 'Saskadelphia',
          artistId: '1',
          year: '2021'
        },
      ],
      selectedRecord: {
        id: '2',
        title: 'Saskadelphia',
        artistId: '1',
        year: '2021'
      }
    }
  }

  beforeEach(() => {
    store = mockStore(mockData);
  });

  it('should render with the state from the store', () => {
    // arrange
    const { asFragment } = render(<Provider store={store}>
      <AppConnector />
    </Provider>);

    // act

    // assert
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display the artists, the records for the selected artist and the details of the selected record', () => {
    // arrange
    render(<Provider store={store}>
      <AppConnector />
    </Provider>);

    // act

    //assert
    const artist1 = screen.getByText(mockData.artistsReducer.artists[0].name);
    const artist2 = screen.getByText(mockData.artistsReducer.artists[1].name);
    const selectedArtistRecordsHeading = screen.getByText(`${mockData.artistsReducer.selectedArtist.name} Records`);
    const record1 = screen.getByText(mockData.recordsReducer.filteredRecords[0].title);
    const record2 = screen.getAllByText(mockData.recordsReducer.filteredRecords[1].title)[0];
    const selectedRecordHeading = screen.getByText(`${mockData.recordsReducer.selectedRecord.title} 411`);
    const selectedRecordYear = screen.getByText(mockData.recordsReducer.selectedRecord.year);

    expect(artist1).toBeInTheDocument();
    expect(artist2).toBeInTheDocument();
    expect(selectedArtistRecordsHeading).toBeInTheDocument();
    expect(record1).toBeInTheDocument();
    expect(record2).toBeInTheDocument();
    expect(selectedRecordHeading).toBeInTheDocument();
    expect(selectedRecordYear).toBeInTheDocument();

    expect(artist1).toHaveClass('selected');
    expect(artist2).toHaveClass('normal');

    expect(record1).toHaveClass('normal');
    expect(record2).toHaveClass('selected');
  });

});