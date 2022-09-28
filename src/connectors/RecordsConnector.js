import { connect } from "react-redux";
import { createAddNewRecordAction, createSetSelectedRecordAction } from "../actions/recordActionCreators";
import Records from "../components/Records";

const mapStateToProps = (store) => ({
  records: store.recordsReducer.filteredRecords,
  selectedRecord: store.recordsReducer.selectedRecord,
  selectedArtist: store.artistsReducer.selectedArtist
});
const mapDispatchToProps = (dispatch) => ({
  setSelectedRecord: (recordId) => dispatch(createSetSelectedRecordAction(recordId)),
  addNewRecord: (args) => dispatch(createAddNewRecordAction(args))
});
export const RecordsConnector = connect(mapStateToProps, mapDispatchToProps)(Records);

/*
    <Records
        records={array of record objects}
        setSelectedRecord={(recordId) => dispatch(createSetSelectedRecordAction(recordId))}
    />
*/