import classNames from 'classnames';
import { useRef } from 'react';
import { v4 as uuid } from 'uuid';
import sharedStyles from '../SharedStyles.module.css';

const Records = ({ records, selectedRecord, selectedArtist, setSelectedRecord, addNewRecord }) => {
  const titleInput = useRef(null);
  const yearInput = useRef(null);

  return <>

    <div className={sharedStyles.formWrapper}>
      <input
        className={sharedStyles.formInput}
        ref={titleInput}
        placeholder='album title'
        disabled={!selectedArtist}
        style={{ width: '50%' }}
      />
      <input
        className={sharedStyles.formInput}
        ref={yearInput}
        placeholder='year'
        style={{ width: '20%' }}
        disabled={!selectedArtist}
      />
      <button
        style={{ width: '15%' }}
        disabled={!selectedArtist}
        onClick={() => {
          addNewRecord({
            title: titleInput.current.value,
            year: yearInput.current.value,
            artistId: selectedArtist.id
          });
          titleInput.current.value = '';
          yearInput.current.value = '';
        }
        }>Save</button>
    </div>
    {
      records?.length ? (
        <ul>
          {
            records.map(record => (
              <li key={uuid()}
                className={
                  classNames({
                    [sharedStyles.listItem]: true,
                    [sharedStyles.selected]: record?.id === selectedRecord?.id,
                    [sharedStyles.normal]: record?.id !== selectedRecord?.id,
                  })
                }
                onClick={() => setSelectedRecord(record.id)}
              >
                {record.title}
              </li>
            ))
          }
        </ul>
      ) : <p>0 records... pick another artist</p>
    }
  </>;
}


export default Records;