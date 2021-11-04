import React from "react";

const ActorCard = (props) => {
    const IMAGE_URL = `https://image.tmdb.org/t/p/w500`;
    
    return (
        <div className="actorcard">
            <img className="actorcard_img" src={IMAGE_URL + props.actor.profile_path} alt="" />
            <div className='names'>
            <p className='actorName'>{props.actor.name}</p>
                <p className='actorrole'>{props.actor.character}</p>
            </div>    
        </div>


    )
}

export default ActorCard;