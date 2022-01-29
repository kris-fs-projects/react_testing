import { connect } from "react-redux";
import { createAddNewArtistAction, createSetSelectedArtistAction } from "../actions/artistActionCreators";
import Artists from "../components/Artists";

const mapStateToProps = (store) => ({
  artists: store.artistsReducer.artists,
  selectedArtist: store.artistsReducer.selectedArtist
});
const mapDispatchToProps = (dispatch) => ({
  setSelectedArtist: (artistId) => dispatch(createSetSelectedArtistAction(artistId)),
  addNewArtist: (name) => dispatch(createAddNewArtistAction(name))
});
export const ArtistsConnector = connect(mapStateToProps, mapDispatchToProps)(Artists);

/*
  <Artists
    artists={array of artist objects}
    selectedArtist={one artist object}
    setSelectedArtist={(artistId) => dispatch(createSetSelectedArtistAction(artistId))}
    addNewArtist={(artistId) => dispatch(createAddNewArtistAction(name))}
  />
*/