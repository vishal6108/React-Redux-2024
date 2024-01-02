import React from 'react';
import Places from './place.jsx';
import Error from './error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';
import useFetch from '../customHooks/useFetch.js';

async function fetchSortedPlacesData(){
  const data = await fetchAvailablePlaces();

  return new Promise((resolve,reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        data,
        position.coords.latitude,
        position.coords.longitude
      );
      resolve(sortedPlaces);
    });
  })
} 

export default function AvailablePlaces({ onSelectPlace }) {
  // const [isFetching, setIsFetching] = useState(false);
  // const [availablePlaces, setAvailablePlaces] = useState([]);
  // const [error, setError] = useState();

  const {
    isFetching,
    error,
    fetchedData: availablePlaces,
  } = useFetch(fetchSortedPlacesData, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }


  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}