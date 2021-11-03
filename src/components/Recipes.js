import burgers from "../images/burger.jpg"

const Recipes = ({ recipes }) => {

    return (
        <div className="recipe-container">
            <h2>Burgers</h2>
            <div className="recipe-list">
            {recipes.map((recipe) => (
                <div className="recipe-view" style={{backgroundImage: `url(${burgers})`, backgroundSize: 'cover'}} key={recipe.id}>
                    <h2>{recipe.name}</h2>
                    <p>{recipe.description}</p>
                </div>
            ))}
            </div>
        </div>
    )

}

export default Recipes;