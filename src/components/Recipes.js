const Recipes = ({ recipes }) => {

    return (
        <div className="recipe-container">
            <h2>Burgers</h2>
            <div className="recipe-list">
            {recipes.map((recipe) => (
                <div className="recipe-view" key={recipe.id}>
                    <h2>{recipe.name}</h2>
                    <p>{recipe.ingredients}</p>
                </div>
            ))}
            </div>
        </div>
    )

}

export default Recipes;