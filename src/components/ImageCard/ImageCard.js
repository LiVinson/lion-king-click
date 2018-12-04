import React from "react";
import "./ImageCard.css"

const ImageCard = props => (
    <div className ="col-sm-3 col-xs-6 image-card">
        <div className={props.cardClass}  id={props.id}>
            <img className="card-img-top img-thumbnail" src={props.imgURL} alt="Card" onClick={() => {props.onClick(props.id)}}/>
        </div>
    </div>
 )


export default ImageCard;