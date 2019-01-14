import React from 'react';
import { Link } from 'react-router-dom'

const RecipeBox = (props) => {
    return props.recipe.length > 0 ?
        (
            <div className="container-box">
                {props.recipe.map(x => {
                    const newTo = {
                        pathname: `/recipe/${x.recipe_id}`,
                        state: {
                            title: x.title,
                            img: x.image_url,
                            rank: x.social_rank
                        }
                    }
                    return <div className="recipe-box" style={{ backgroundImage: `url(${x.image_url})` }}>
                        <h4>{x.title}</h4>
                        <p>{x.social_rank}</p>
                        <div className="backside">
                            <Link className="view-recipe" to={newTo}>View Recipe </Link>
                            <button onClick={() => { props.hendleLikedRecipe(x.recipe_id) }} className="like-btn">Add to favorite</button>
                        </div>
                    </div>
                })}
            </div>) :
        (

            <div style={{
                paddingLeft: '41%',
                marginTop: '10%'

            }}>
                Recipes are waiting for you...
            </div>

        )



}

export default RecipeBox;