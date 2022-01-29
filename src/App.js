import './App.css';
import styles from './App.module.css';
import Column from './Column';
import { ArtistsConnector } from './connectors/ArtistsConnector';
import { RecordsConnector } from './connectors/RecordsConnector';
import { RecordDetailsConnector } from './connectors/RecordDetailsConnector';
import { useEffect } from 'react';

function App({ fetchArtistsList, fetchRecordsList, selectedArtist, selectedRecord }) {

  useEffect(() => {
    fetchArtistsList();
    fetchRecordsList();
  }, [fetchArtistsList, fetchRecordsList]);

  const recordsHeading = selectedArtist ? `${selectedArtist.name} Records` : 'Records';
  const detailsHeading = selectedRecord ? `${selectedRecord.title} 411` : 'Record Details';

  return (
    <div className={styles.rolodexContainer}>
      <header>
        <h1>my record rolodex</h1>
      </header>
      <div className="fullHeight">
        <div className={styles.artistsBox}>
          <Column heading="Artists">
            <ArtistsConnector />
          </Column>
        </div>
        <div className={styles.recordsBox}>
          <Column heading={recordsHeading}>
            <RecordsConnector />
          </Column>
        </div>
        <div className={styles.detailsBox}>
          <Column heading={detailsHeading}>
            <RecordDetailsConnector />
          </Column>
        </div>
      </div>
      <footer>&copy; 2022 Your Friendly Neighbourhood Record Store</footer>
    </div>
  );
}

export default App;
