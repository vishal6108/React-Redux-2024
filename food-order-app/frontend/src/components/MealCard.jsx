import useHttp from '../components/custom/useHttp.jsx';
import MealItem from './MealItem';
import Error from './Error';

const requestConfig = {};

function MealCard() {
  const {
    data: fetchedData,
    isLoading,
    error,
  } = useHttp('http://localhost:3008/meals', requestConfig, []);

  if (isLoading) {
    return <p className='center'>Fetching Data</p>;
  }
  if (error) {
    return <Error title="Failed to Fetch Data" message={error} />;
  }
  return (
    <ul id="meals">
    {fetchedData.map((meal) => (
      <MealItem key={meal.id} meal={meal}/>
    ))}
  </ul>
  )
}

export default MealCard