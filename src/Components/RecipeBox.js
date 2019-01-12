import React from 'react';
import { Link } from 'react-router-dom'

const RecipeBox = (props) => {

    return (
        <div className="container-box">
            {props.recipe.map(x => {
                return <div className="recipe-box" style={{ backgroundImage: `url(${x.image_url})`}}>
                    <h4>{x.title}</h4>
                    <p>{x.social_rank}</p>
                    <div className="backside">
                        <a href="#">
                        <Link to={{
                            pathname: `/recipe/${x.recipe_id}`,
                            state: {recipe: x.title}
                            }}>
                        View Recipe
                        </Link>                      
                        </a>
                        <button>Like</button>
                    </div>
                </div>
            })}
        </div>
    )
}


export default RecipeBox;