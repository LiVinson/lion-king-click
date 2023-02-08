import React from "react";
import "./ImageCard.css"

interface Props {
    key: string;
    id: string;
    imgURL: string;
    onClick: (id:string)=> void;
    cardClass:string;
}

const ImageCard = (props: Props) => (
    <div className ="col-sm-3 col-xs-6 image-card">
        <div className={props.cardClass}  id={props.id}>
            <img className="card-img-top img-thumbnail" src={props.imgURL} alt="Card" onClick={() => {props.onClick(props.id)}}/>
        </div>
    </div>
 )


export default ImageCard;