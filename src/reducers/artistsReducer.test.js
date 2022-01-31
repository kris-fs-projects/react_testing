import artistsReducer from './artistsReducer';
import Chance from 'chance';

/**
 * reducers are easy to test because they are pure functions
 * pump in some params and make sure they return what you expect
 */
describe('artists reducer', () => {
  const chance = new Chance();
  let initialState;

  beforeEach(() => {
    initialState = {
      artists: [],
      selectedArtist: null
    };
  });
  afterEach(() => {
    initialState = null;
  });

  /**
   * THE HAPPY CASES
   * make sure that the software does what you expect
   * under optimal conditions (aka, all args are passed
   * and are in the right format)
  */
  it('should return default state upon initialization', () => {
    const irrelevantAction = { type: 'not one of the types we care about' };
    const returnedState = artistsReducer(undefined, irrelevantAction);

    expect(returnedState.artists).toEqual([]);
    expect(returnedState.selectedArtist).toBeNull();
  });

  it('should add a new artist', () => {
    // const initialState = {
    //     artists: []
    //     // ,selectedArtist: null
    //     // for this specific test, the other pieces of the
    //     // state pie are not relevant so you don't have
    //     // to include them
    // };
    const newArtistToAdd = {
      name: chance.string()
    };
    const action = {
      type: 'ADD_ARTIST',
      payload: newArtistToAdd
    };
    const returnedState = artistsReducer(initialState, action);
    const returnedArtist = returnedState.artists[returnedState.artists.length - 1];

    expect(returnedArtist).toEqual(newArtistToAdd);
    expect(returnedArtist.name).toEqual(newArtistToAdd.name);
  });

  it('should store the artist data from the payload', () => {
    const newArtists = [
      {
        id: chance.hash(),
        name: chance.string()
      },
      {
        id: chance.hash(),
        name: chance.string()
      }
    ];

    // const newArtists = [
    //     chance.string(),
    //     chance.string(),
    // ];
    // it doesn't necessarily matter that these strings don't
    // properly represent real artist objects
    // or does it?
    // if this test passes with random data, what does that tell you?
    // this could indicate a potential weakness in the software

    const action = {
      type: 'GET_ARTIST_LIST_ASYNC',
      payload: {
        artists: newArtists
      }
    }

    const returnedState = artistsReducer(initialState, action);
    const returnedArtists = returnedState.artists;

    expect(returnedArtists).toEqual(newArtists);
  });

  it('should set the selected artist based on the artist id from the payload', () => {

    // ARRANGE
    const idForArtistToPick = chance.hash();
    const stateForThisTest = {
      ...initialState,
      ...{
        artists: [
          {
            id: chance.hash(),
            name: chance.string()
          },
          {
            id: idForArtistToPick,
            name: chance.string()
          },
          {
            id: chance.hash(),
            name: chance.string()
          },
        ],
        selectedArtist: chance.string()
      }
    }
    const action = {
      type: 'SET_SELECTED_ARTIST',
      payload: idForArtistToPick
    }

    // ACT
    const returnedState = artistsReducer(stateForThisTest, action);

    // ASSERT
    expect(returnedState.selectedArtist).toEqual(stateForThisTest.artists[1]);
  });


  /**
   * THE SAD CASES
   * verify that the software does what you expect
   * under non-optimal conditions, when params are
   * incomplete or malformed
  */

  it('should set the selected artist to falsy if the artist can not be found', () => {

    // ARRANGE
    const idForArtistToPick = chance.hash();
    const stateForThisTest = {
      ...initialState,
      ...{
        artists: [
          {
            id: chance.hash(),
            name: chance.string()
          },
          {
            id: chance.hash(), // now there's no longer a match
            name: chance.string()
          },
          {
            id: chance.hash(),
            name: chance.string()
          },
        ],
        selectedArtist: chance.string()
      }
    }
    const action = {
      type: 'SET_SELECTED_ARTIST',
      payload: idForArtistToPick
    }

    // ACT
    const returnedState = artistsReducer(stateForThisTest, action);

    // ASSERT
    // expect(returnedState.selectedArtist).toBeNull();
    // expect(returnedState.selectedArtist).toBeUndefined();
    expect(returnedState.selectedArtist).toBeFalsy();
  });


});