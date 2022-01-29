import { connect } from "react-redux";
import RecordDetails from "../components/RecordDetails";

const mapStateToProps = (store) => ({
  record: store.recordsReducer.selectedRecord
});
export const RecordDetailsConnector = connect(mapStateToProps)(RecordDetails);

/*
  <RecordsDetails
    record={one record object}
  />
*/