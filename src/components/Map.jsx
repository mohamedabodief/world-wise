import { useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  return (
    <div className={styles.mapContainer}>
      <h1>Map Component</h1>
      <h2>
        Position: {lat} , {lng}
      </h2>
      <button
        onClick={() => {
          setSearchParams({ lat: '51.505', lng: '-0.09' });
        }}
      >
        Change position
      </button>
    </div>
  );
}

export default Map;
