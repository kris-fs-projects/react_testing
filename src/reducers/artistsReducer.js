import { ADD_ARTIST, GET_ARTIST_LIST_ASYNC, SET_SELECTED_ARTIST } from "../actions/actionTypes";

const defaultState = {
  artists: [],
  selectedArtist: null
}

const handleGetArtistListAsync = (state, action) => ({
  ...state,
  ...{
    artists: action.payload.artists
  }
});

const handleSetSelectedArtistByID = (state, action) => ({
  ...state,
  ...{
    selectedArtist: state.artists.find(artist => artist.id === action.payload)
  }
});

const handleAddArtist = (state, action) => ({
  ...state,
  ...{
    artists: [...state.artists, action.payload]
  }
});

const artistsReducer = (state = defaultState, action) => {
  const actionHandlers = {
    [GET_ARTIST_LIST_ASYNC]: handleGetArtistListAsync,
    [SET_SELECTED_ARTIST]: handleSetSelectedArtistByID,
    [ADD_ARTIST]: handleAddArtist,
  };
  const reducer = actionHandlers[action.type];
  return reducer ? reducer(state, action) : state;
};

export default artistsReducer;