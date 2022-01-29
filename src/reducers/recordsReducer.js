import { ADD_RECORD, GET_RECORD_LIST_ASYNC, SET_SELECTED_ARTIST, SET_SELECTED_RECORD } from "../actions/actionTypes";

const defaultState = {
  records: [],
  filteredRecords: [],
  selectedRecord: null
}

const handleGetRecordListAsync = (state, action) => (
  {
    ...state,
    ...{
      records: action.payload.records,
      filteredRecords: action.payload.records
    }
  }
);

const handleSetSelectedRecordID = (state, action) => (
  {
    ...state,
    ...{
      selectedRecord: state.records.find(record => record.id === action.payload)
    }
  }
);

const handleSetSelectedArtistID = (state, action) => (
  {
    ...state,
    ...{
      filteredRecords: state.records.filter(record => record.artistId === action.payload),
      selectedRecord: null
    }
  }
);

const handleAddRecord = (state, action) => ({
  ...state,
  ...{
    records: [...state.records, action.payload],
    filteredRecords: state.records.filter(record => record.artistId === action.payload),
  },
});

const recordsReducer = (state = defaultState, action) => {
  const actionHandlers = {
    [GET_RECORD_LIST_ASYNC]: handleGetRecordListAsync,
    [SET_SELECTED_RECORD]: handleSetSelectedRecordID,
    [SET_SELECTED_ARTIST]: handleSetSelectedArtistID,
    [ADD_RECORD]: handleAddRecord,
  };
  const reducer = actionHandlers[action.type];
  return reducer ? reducer(state, action) : state;
};

export default recordsReducer;