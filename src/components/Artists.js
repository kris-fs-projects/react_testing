import classNames from 'classnames';
import { useRef } from 'react';
import { v4 as uuid } from 'uuid';
import sharedStyles from '../SharedStyles.module.css';

const Artists = ({ artists, selectedArtist, setSelectedArtist, addNewArtist }) => {
  const artistNameInput = useRef(null);
  return <>
    <input
      ref={artistNameInput}
      placeholder='type a new artist name and hit enter to save it'
      onKeyDown={(event) => {
        if (event.code === 'Enter') {
          addNewArtist(artistNameInput.current.value);
          artistNameInput.current.value = '';
        }
      }}
      style={{ width: "100%", margin: '2px', boxSizing: 'border-box' }}
    />
    <ul>
      {
        artists.map(artist => (
          <li key={uuid()}
            className={
              classNames({
                [sharedStyles.listItem]: true,
                [sharedStyles.selected]: artist?.id === selectedArtist?.id,
                [sharedStyles.normal]: artist?.id !== selectedArtist?.id,
              })
            }
            onClick={() => setSelectedArtist(artist.id)}
          >
            {artist.name}
          </li>
        ))
      }
    </ul>
  </>;
}


export default Artists;