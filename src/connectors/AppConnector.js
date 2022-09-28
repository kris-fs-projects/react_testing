import { connect } from "react-redux";
import { createGetArtistListAsyncAction } from "../actions/artistActionCreators";
import { createGetRecordListAsyncAction } from "../actions/recordActionCreators";
import App from "../App";

const mapStateToProps = (store) => ({
  selectedArtist: store.artistsReducer.selectedArtist,
  selectedRecord: store.recordsReducer.selectedRecord
});

const mapDispatchToProps = (dispatch) => ({
  fetchArtistsList: () => dispatch(createGetArtistListAsyncAction()),
  fetchRecordsList: () => dispatch(createGetRecordListAsyncAction())
});

export const AppConnector = connect(mapStateToProps, mapDispatchToProps)(App);

/* 
    <App 
        selectedArtist={}
        selectedRecord={}
    />
*/