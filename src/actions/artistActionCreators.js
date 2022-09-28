import { ADD_ARTIST, GET_ARTIST_LIST_ASYNC, SET_SELECTED_ARTIST } from "./actionTypes";
import {v4 as uuidv4} from 'uuid';

const createGetArtistListAction = (artistList) => ({
  type: GET_ARTIST_LIST_ASYNC,
  payload: artistList
});
export const createGetArtistListAsyncAction = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/artists.json');
    const artistListAsJSON = await response.json();

    dispatch(createGetArtistListAction(artistListAsJSON))
  } catch (error) {
    console.log(error.message);
  }
}

export const createSetSelectedArtistAction = (artistId) => ({
  type: SET_SELECTED_ARTIST,
  payload: artistId
});

export const createAddNewArtistAction = (name,) => ({
  type: ADD_ARTIST,
  payload: {
    id: uuidv4(), // this is not realistic because primary key values are not generated on the client side in real life but it'll do for this little demo
    name
  }
});
