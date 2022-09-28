import { ADD_ARTIST } from "../actions/actionTypes";
import artistsReducer from "./artistsReducer";
import Chance from "chance";

describe('artists reducer', () => {
    let chance;
    let initialState;

    beforeEach(() => {
        initialState = {
            artists: [],
            selectedArtist: null
        }
        chance = new Chance();
    });

    it('should return default state upon initialization', () => {
        const initAction = { type: 'swhatresdsbvkfdbs'};
        const returnedState = artistsReducer(undefined, initAction);

        expect(returnedState.artists).toEqual([]);
        expect(returnedState.selectedArtist).toBeNull();

    });


    it('should add a new artist to the list', () => {
        const newArtistName = chance.string();

        const newArtistToAdd = {
            name: newArtistName
        };
        const action = {
            type: ADD_ARTIST,
            payload: newArtistToAdd
        }

        const returnedState = artistsReducer(initialState, action);


        expect(returnedState.artists[0]).toEqual(newArtistToAdd);
        expect(returnedState.artists[0].name).toEqual(newArtistName);
        expect(returnedState.artists.length).toEqual(1);
    });

})