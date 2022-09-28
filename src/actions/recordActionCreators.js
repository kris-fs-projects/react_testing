import { ADD_RECORD, GET_RECORD_LIST_ASYNC, SET_SELECTED_RECORD } from "./actionTypes";
import { v4 as uuidv4 } from 'uuid';
import { createSetSelectedArtistAction } from "./artistActionCreators";

const getRecordListAction = (recordList) => ({
  type: GET_RECORD_LIST_ASYNC,
  payload: recordList
});
export const createGetRecordListAsyncAction = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/records.json');
    const recordListAsJSON = await response.json();

    dispatch(getRecordListAction(recordListAsJSON))
  } catch (error) {
    console.log(error.message);
  }
}

export const createSetSelectedRecordAction = (recordId) => ({
  type: SET_SELECTED_RECORD,
  payload: recordId
});

const addNewRecordAction = ({ title, year, artistId }) => ({
  type: ADD_RECORD,
  payload: {
    id: uuidv4(),
    title,
    year,
    artistId
  }
})
export const createAddNewRecordAction = (args) => async (dispatch) => {
  dispatch(addNewRecordAction(args));

  // artificial pause to wait for previous "async call" to complete
  setTimeout(() => {
    // this causes the records list to refresh after the new record has been added
    dispatch(createSetSelectedArtistAction(args.artistId));
  }, 1000)
};
