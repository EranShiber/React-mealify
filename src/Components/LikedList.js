import React from 'react';
import Nav from '../Layouts/Nav';
class UserList extends React.Component {
    notAddedRecipesStyle = {
        fontSize: '170%',
        textAlign: 'center',
        marginTop: '10%'

    }
    render() {
      
        return (
            <div>
                <Nav />

                {this.props.location.state.length > 0 ? (<div> {this.props.location.state.map(x => {
                    return <div className="recipe-box" style={{ backgroundImage: `url(${x.image_url})` }}>
                        <h4>{x.title}</h4>
                        <p>{x.social_rank}</p>
                        <div className="backside">
                        </div>
                    </div>
                })}</div>) : (<div style={this.notAddedRecipesStyle}>You didnt added any recipes!</div>)}



               
            </div>

        )
    }
}

export default UserList