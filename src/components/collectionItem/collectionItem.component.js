import React from 'react';
import './collectionItem.styles.scss';


//properties expected to come in:id,name,price,imageUrl
const collectionItem =({id, name, price, imageUrl}) => (
    <div className="collection-item">
        <div className="image"
        style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
    </div>
);



export default collectionItem;