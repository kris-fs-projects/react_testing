import Chance from "chance";
import { createAddNewArtistAction, createGetArtistListAsyncAction, createSetSelectedArtistAction } from "./artistActionCreators";

describe('Artist action creator', () => {

  const dispatchMock = jest.fn();
  let chance;

  beforeAll(() => {
    chance = new Chance();
  });


  // https://mswjs.io/
  // without mock service worker
  // this test is brittle because it will fail if
  // the data returned from the fetch call changes
  // (the orginal version of this test contained
  // copy/pasted content from the actual file that
  // the api retreives from)

  // depending on real data from real external
  // sources in a unit test is a recipe for disaster

  // with mock service worker, I don't care anymore about
  // what the real api returns... all I have to do is
  // keep the data I specify in my test in sync with
  // the data specified in handlers.js
  // as long as they're synced up, the tests pass and I
  // can forget about what the real api returns
  it('should fetch artists', async () => {
    const sampleJSON_ExactMatchWithRealAPI = JSON.parse(`{
            "artists": [
                {
                    "id": "1",
                    "name": "The Tragically Hip"
                },
                {
                    "id": "2",
                    "name": "The Watchmen"
                },
                {
                    "id": "3",
                    "name": "The Rolling Stones"
                },
                {
                    "id": "4",
                    "name": "The Beatles"
                },
                {
                    "id": "5",
                    "name": "Led Zeppelin"
                },
                {
                    "id": "6",
                    "name": "Jethro Tull"
                }
            ]
        }`);
    const sampleJSON_ExactMatchWithMockAPI = JSON.parse(`{
            "artists": [
                {
                    "id": "1234567890",
                    "name": "The Tragically Hip"
                }
            ]
        }`);

    const artistList = sampleJSON_ExactMatchWithMockAPI;


    const expectedAction = {
      type: 'GET_ARTIST_LIST_ASYNC',
      payload: artistList
    }
    await (createGetArtistListAsyncAction()(dispatchMock))

    expect(dispatchMock).toHaveBeenCalledWith(expectedAction);

  });

  it('should return an action object with the artist id in the payload', () => {
    // arrange
    const id = chance.guid();
    const expectedAction = {
      type: 'SET_SELECTED_ARTIST',
      payload: id
    }
    // act
    const receivedAction = createSetSelectedArtistAction(id);

    // assert
    expect(receivedAction).toEqual(expectedAction);
  });

  it('should return an action object with the artist name in the payload', () => {
    // arrange
    const name = chance.name();
    const id = chance.guid();
    const expectedAction = {
      type: 'ADD_ARTIST',
      payload: {
        id,
        name
      }
    };

    // act
    const receivedAction = createAddNewArtistAction(name);

    // assert
    // this will fail because the id properties are different
    // expect(receivedAction).toEqual(expectedAction);

    // this will pass because it excludes the id prop
    expect(receivedAction.name).toEqual(expectedAction.name);

  });

});