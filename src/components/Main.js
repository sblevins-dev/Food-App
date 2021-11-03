import Recipes from './Recipes';
import useFetch from './useFetch';

const Main = () => {

  //const testUrl = "https://jsonplaceholder.typicode.com/users"
  const foodUrl = "https://burgers1.p.rapidapi.com/burgers";

 const { data: recipes } = useFetch(foodUrl);


  return (
    <div className="main">
      { recipes && <Recipes recipes={recipes} title="All Recipes" />}
    </div>

  )
}

export default Main;
